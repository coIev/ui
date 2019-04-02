const cookie = require('cookie');
const dateFns = require('date-fns');
const express = require('express');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

module.exports = function authRouter(config = {}) {
	const router = express.Router();
	router.use('/error', (req, res, next) => {
		if (req.query.error === 'access_denied') {
			const loginRedirectUrl = config.auth0.loginRedirectUrls[req.query.client_id];
			res.redirect(loginRedirectUrl);
		} else {
			next();
		}
	});
	if (!config.auth0.enable) {
		// return routes that redirect to kiva/kiva login
		router.get('/ui-login', (req, res) => res.redirect('/login'));
		router.get('/ui-logout', (req, res) => res.redirect('/logout'));
		return router;
	}

	passport.use(new Auth0Strategy({
		domain: config.auth0.domain,
		clientID: config.auth0.serverClientID,
		clientSecret: process.env.UI_AUTH0_CLIENT_SECRET,
		callbackURL: config.auth0.serverCallbackUri,
	}, (accessToken, refreshToken, extraParams, profile, done) => {
		return done(null, { ...profile, accessToken });
	}));

	passport.serializeUser((user, done) => done(null, user));
	passport.deserializeUser((user, done) => done(null, user));

	router.use(passport.initialize());
	router.use(passport.session());

	router.get('/ui-login', (req, res, next) => {
		// Store url to redirect to after successful login
		if (req.query.doneUrl) {
			req.session.doneUrl = req.query.doneUrl;
		}
		next();
	}, passport.authenticate('auth0', {
		audience: config.auth0.apiAudience,
		scope: config.auth0.scope,
	}), (req, res) => res.redirect('/'));

	router.get('/ui-logout', (req, res) => {
		const returnUrl = encodeURIComponent(`https://${config.host}`);
		const logoutUrl = `https://${config.auth0.domain}/v2/logout?returnTo=${returnUrl}`;
		req.logout();
		res.redirect(logoutUrl);
	});

	router.get('/process-ssr-auth', (req, res, next) => {
		passport.authenticate('auth0', (authErr, user) => {
			if (authErr) return next(authErr);
			if (!user) return res.redirect('/ui-login');

			req.login(user, loginErr => {
				if (loginErr) return next(loginErr);
				// Redirect to the stored url
				const { doneUrl } = req.session;
				delete req.session.doneUrl;
				res.redirect(doneUrl || '/portfolio');
			});
		})(req, res, next);
	});

	return router;
};

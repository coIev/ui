// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
		'import',
		'html'
	],
	// check if imports actually resolve
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	// add your custom rules here
	'rules': {
		// tabs not spaces
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			'js': 'never',
			'vue': 'never'
		}],
		// allow optionalDependencies
		'import/no-extraneous-dependencies': ['error', {
			'optionalDependencies': ['test/unit/index.js']
		}],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// allow curly brackets around arrow function bodies
		'arrow-body-style': 'off',
		// allow no parens for single-argument arrow functions
		'arrow-parens': ['error','as-needed'],
		// allow no return statement
		'consistent-return': 'off',
	}
}

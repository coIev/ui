export default {
	data() {
		return {
			emailErrors: [],
			passwordErrors: [],
		};
	},
	methods: {
		checkEmpty(value) {
			return value === '';
		},
		validateName(name) {
			this.nameErrors = [];
			if (this.checkEmpty(name)) {
				this.nameErrors.push('Name required');
			}
		},
		validatePassword(password) {
			this.passwordErrors = [];
			if (this.checkEmpty(password)) {
				this.passwordErrors.push('Password required');
			}
			return this.passwordErrors;
		},
		validateEmail(email) {
			this.emailErrors = [];
			// regex taken from: http://emailregex.com/
			// eslint-disable-next-line
			const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

			if (this.checkEmpty(email)) {
				this.emailErrors.push('Email required');
			}
			if (!re.test(email)) {
				this.emailErrors.push('Valid email required.');
			}
			return this.emailErrors;
		},
		validateTerms() {
			this.termsErrors = [];
			if (!this.terms) {
				this.termsErrors.push('You must agree to the Kiva Terms of service & Privacy policy');
			}
		}
	}
};

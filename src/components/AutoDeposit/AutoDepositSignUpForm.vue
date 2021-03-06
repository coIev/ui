<template>
	<form
		class="ad-sign-up-form"
		@submit.prevent
		novalidate
	>
		<!-- Amount and Day Input -->
		<div class="row column align-middle">
			<span class="ad-sign-up-form__deposit-text">
				Deposit
			</span>
			<label
				class="show-for-sr"
				:class="{ 'error': $v.adAmount.$invalid }"
				for="amount"
			>
				Amount
			</label>
			<kv-currency-input class="text-input" id="amount" v-model="adAmount" />
			<span class="ad-sign-up-form__deposit-text">
				each month on the
			</span>
			<label class="show-for-sr" :class="{ 'error': $v.dayOfMonth.$invalid }" :for="dayOfMonth">
				Day of the Month
			</label>
			<input v-if="isDayInputShown"
				@blur="hideDayInput()"
				class="text-input"
				id="dayOfMonth"
				type="number"
				placeholder=""
				required
				min="1"
				max="31"
				v-model.number="dayOfMonth"
			>
			<button
				class="ad-sign-up-form__button--ordinal-day"
				@click="isDayInputShown = true"
				v-if="!isDayInputShown"
			>
				<strong>{{ dayOfMonth | numeral('Oo') }}</strong>
				<kv-icon class="icon-pencil" name="pencil" title="Edit" />
			</button>
		</div>

		<!-- Errors and Messaging -->
		<div class="row column text-center">
			<ul class="validation-errors" v-if="$v.dayOfMonth.$invalid">
				<li v-if="!$v.dayOfMonth.required">
					Day field is required
				</li>
				<li v-if="!$v.dayOfMonth.minValue || !$v.dayOfMonth.maxValue">
					Enter day of month - 1 to 31
				</li>
			</ul>
			<ul class="validation-errors" v-if="$v.adAmount.$invalid">
				<li v-if="!$v.adAmount.required">
					Amount field is required
				</li>
				<li v-if="!$v.adAmount.minValue || !$v.adAmount.maxValue">
					Enter an amount of $0-$10,000
				</li>
			</ul>
		</div>

		<!-- Donation -->
		<div class="row collapse align-middle">
			<div class="columns shrink">
				<kv-checkbox
					id="donation-checkbox"
					v-model="donationCheckbox"
					@change="donationCheckboxChange()"
				/>
				<span class="ad-sign-up-form__donation-text">
					Add an optional
				</span>
			</div>

			<div class="columns shrink">
				<label
					class="show-for-sr"
					:class="{ 'error': $v.donation.$invalid }"
					for="donation"
				>
					Donation
				</label>
				<kv-dropdown-rounded
					class="donation-dropdown"
					v-model="donationOptionSelected"
					v-if="donationOptionSelected !== 'other'"
				>
					<option
						v-for="(option, index) in dropdownOptions"
						:value="option.value"
						:key="index"
					>
						{{ option.label }}
					</option>
				</kv-dropdown-rounded>
				<kv-currency-input
					class="text-input"
					id="donation"
					v-model="donation"
					v-if="donationOptionSelected === 'other'"
				/>
			</div>

			<div class="columns shrink">
				<span class="ad-sign-up-form__donation-text">
					donation to support Kiva’s costs
				</span>
			</div>
		</div>

		<!-- Donation Errors -->
		<div class="row column text-center">
			<ul class="validation-errors" v-if="$v.donation.$invalid">
				<li v-if="!$v.donation.minValue || !$v.donation.maxValue">
					Enter a donation amount of $0-$10,000
				</li>
			</ul>
		</div>

		<!-- General Errors & Messaging-->
		<div class="row column text-center">
			<ul class="validation-errors"
				v-if="!$v.adAmount.combinedTotal || !$v.donation.combinedTotal"
			>
				<li>
					To set up an Auto Deposit, please enter a total amount between $0 and $10,000.
				</li>
			</ul>
			<small v-if="dayOfMonth > 28">
				(note - deposit may be processed on the last day of the month)</small>
		</div>

		<!-- Payment Wrapper-->
		<div class="row column">
			<div class="payment-dropin-wrapper" v-if="isLoggedIn">
				<div class="payment-dropin-invalid-cover" v-if="$v.$invalid"></div>
				<auto-deposit-drop-in-payment-wrapper
					:amount="totalCombinedDeposit"
					:donate-amount="donation"
					:day-of-month="dayOfMonth"
					@complete-transaction="completeADBraintree"
				/>
			</div>
			<div class="text-center" v-else>
				<kv-button
					class="sign-in-button"
					title="Sign in to set up"
					:href="`/ui-login?force=true&doneUrl=${$route.path}`"
				>
					Sign in to set up
				</kv-button>
			</div>
		</div>
		<kv-loading-overlay
			v-if="showLoadingOverlay"
		/>
	</form>
</template>

<script>
import numeral from 'numeral';
import _get from 'lodash/get';
import { validationMixin } from 'vuelidate';
import { required, minValue, maxValue } from 'vuelidate/lib/validators';

import AutoDepositDropInPaymentWrapper from '@/components/AutoDeposit/AutoDepositDropInPaymentWrapper';
import KvButton from '@/components/Kv/KvButton';
import KvCheckbox from '@/components/Kv/KvCheckbox';
import KvCurrencyInput from '@/components/Kv/KvCurrencyInput';
import KvDropdownRounded from '@/components/Kv/KvDropdownRounded';
import KvIcon from '@/components/Kv/KvIcon';
import KvLoadingOverlay from '@/components/Kv/KvLoadingOverlay';

import userIdQuery from '@/graphql/query/userId.graphql';

let frozenDropdownOptions;

export default {
	components: {
		AutoDepositDropInPaymentWrapper,
		KvButton,
		KvCheckbox,
		KvCurrencyInput,
		KvDropdownRounded,
		KvIcon,
		KvLoadingOverlay,
	},
	data() {
		return {
			adAmount: 25,
			isDayInputShown: false,
			dayOfMonth: new Date().getDate(),
			donation: 25 * 0.15,
			donationCheckbox: true,
			donationOptionSelected: '15',
			isDonationOptionsDirty: false,
			isLoggedIn: false,
			showLoadingOverlay: false,
		};
	},
	mixins: [
		validationMixin,
	],
	validations: {
		adAmount: {
			required,
			minValue: minValue(0),
			maxValue: maxValue(10000),
			combinedTotal(value) {
				return value + this.donation < 10000 && value + this.donation > 0;
			}
		},
		donation: {
			minValue: minValue(0),
			maxValue: maxValue(10000),
			combinedTotal(value) {
				return value + this.adAmount < 10000 && value + this.adAmount > 0;
			}
		},
		dayOfMonth: {
			required,
			minValue: minValue(1),
			maxValue: maxValue(31)
		},

	},
	inject: ['apollo'],
	apollo: {
		query: userIdQuery,
		preFetch: true,
		result({ data }) {
			this.isLoggedIn = _get(data, 'my.userAccount.id') !== undefined || false;
		},
	},
	watch: {
		donation(newVal) {
			if (newVal !== 0) {
				this.donationCheckbox = true;
			}
			if (newVal === 0) {
				this.donationOptionSelected = '0';
			}
		},
		donationOptionSelected(newVal) {
			// flag donation options as dirty, which stops the recalculation of the drop down values.
			this.isDonationOptionsDirty = true;
			if (newVal !== 'other') {
				// handle pre-computed donation options based update
				if (!this.isDonationOptionsDirty) {
					// get selected amount in donation
					const selectedDonationAmount = this.calculatedDonationOptions.find(
						donationSelect => donationSelect.value === newVal
					);
					this.donation = selectedDonationAmount.monetaryValue;
				} else if (this.isDonationOptionsDirty) {
					// handle user selected donation options based update
					this.$nextTick(() => {
						const selectedFrozenOption = frozenDropdownOptions.find(
							donationSelect => donationSelect.value === newVal
						);
						if (selectedFrozenOption) {
							this.donation = selectedFrozenOption.monetaryValue;
						}
					});
				}

				// sync the checkbox with the dropdown.
				if (newVal !== '0') {
					this.donationCheckbox = true;
				} else {
					this.donationCheckbox = false;
				}
			}
		},
		// monitor adAmount for changes
		adAmount() {
			// handle pre-computed donation options based update
			if (this.donationOptionSelected !== 'other' && !this.isDonationOptionsDirty) {
				// get selected amount in donation
				const selectedDonationAmount = this.calculatedDonationOptions.find(
					donationSelect => donationSelect.value === this.donationOptionSelected
				);
				this.donation = selectedDonationAmount.monetaryValue;
			} else if (this.donationOptionSelected !== 'other' && this.isDonationOptionsDirty) {
				// handle user selected donation options based update
				const selectedFrozenOption = frozenDropdownOptions.find(
					donationSelect => donationSelect.value === this.donationOptionSelected
				);
				if (selectedFrozenOption) {
					this.donation = selectedFrozenOption.monetaryValue;
				}
			}
		},
	},
	methods: {
		hideDayInput() {
			if (!this.$v.dayOfMonth.$invalid) {
				this.isDayInputShown = false;
			}
		},
		donationCheckboxChange() {
			if (!this.donationCheckbox) {
				// when box is unchecked, change donation amount to zero.
				this.donationOptionSelected = '0';
			}
		},
		completeADBraintree() {
			this.showLoadingOverlay = true;
			this.$kvTrackEvent('Registration', 'successful-auto-deposit-reg', 'register-auto-deposit');
			// Send to thanks page
			this.$router.push({
				path: `${this.$route.path}/thanks`,
			}).finally(() => {
				this.showLoadingOverlay = false;
			});
		},
	},
	computed: {
		totalCombinedDeposit() {
			return this.donation + this.adAmount;
		},
		dropdownOptions() {
			if (this.isDonationOptionsDirty) {
				if (!frozenDropdownOptions) {
					// make a copy of calculatedDonationOptions to freeze the values
					frozenDropdownOptions = this.calculatedDonationOptions.map(selectItem => ({ ...selectItem }));
				}
				return frozenDropdownOptions;
			}
			return this.calculatedDonationOptions;
		},
		calculatedDonationOptions() {
			// If adAmount isn't valid, just set these values to default
			const amountToBasePercentageOn = this.$v.adAmount.$invalid ? 25 : this.adAmount;
			return [
				{
					value: '20',
					label: `${numeral(amountToBasePercentageOn * 0.20).format('$0,0.00')}`,
					monetaryValue: Math.round(amountToBasePercentageOn * 0.20 * 100) / 100
				},
				{
					value: '15',
					label: `${numeral(amountToBasePercentageOn * 0.15).format('$0,0.00')}`,
					monetaryValue: Math.round(amountToBasePercentageOn * 0.15 * 100) / 100

				},
				{
					value: '8',
					label: `${numeral(amountToBasePercentageOn * 0.08).format('$0,0.00')}`,
					monetaryValue: Math.round(amountToBasePercentageOn * 0.08 * 100) / 100
				},
				{
					value: '0',
					label: '$0.00',
					monetaryValue: 0

				},
				{
					value: 'other',
					label: 'Other'
				}
			];
		},
	},
};

</script>

<style lang="scss" scoped>
@import 'settings';

.ad-sign-up-form {
	margin-top: 1rem;
	max-width: rem-calc(665);

	.row {
		margin-bottom: 1rem;
	}

	ul.validation-errors {
		margin-bottom: 0;
	}

	&__deposit-text {
		font-size: $featured-text-font-size;
		font-weight: $global-weight-bold;
	}

	&__donation-text {
		font-size: $medium-text-font-size;
		font-weight: $global-weight-bold;
		padding: 0 0.65rem;
	}

	&__button--ordinal-day {
		color: $kiva-accent-blue;
		fill: $kiva-accent-blue;
		cursor: pointer;
		font-size: $featured-text-font-size;
		padding: 0.25rem;
	}

	::v-deep .dropdown-wrapper.donation-dropdown .dropdown {
		width: rem-calc(130);
		margin-bottom: 0;
	}

	::v-deep .kv-checkbox {
		display: inline-block;
		width: rem-calc(17);
	}
}

// styles to match KvDropDownRounded
.text-input {
	border-radius: $button-radius;
	color: $charcoal;
	font-size: $medium-text-font-size;
	font-weight: $global-weight-highlight;
	margin: 0;
	display: inline-block;
	// amount input
	&#amount {
		width: rem-calc(130);
		display: inline-block;
		margin: 0 0.35rem 0 0.55rem;
	}
	// day input
	&#dayOfMonth {
		width: rem-calc(62);
		margin-left: 0.5rem;
	}
	// donation other input
	&#donation {
		width: rem-calc(130);
	}
}

label:not(.error) + .text-input {
	border: 1px solid $charcoal;
}

.sign-in-button {
	margin-top: 3rem;
}

.payment-dropin-wrapper {
	position: relative;
	text-align: center;
	margin-top: 3rem;
}

.payment-dropin-invalid-cover {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(255, 255, 255, 0.8);
	z-index: 10000;
}

.icon-pencil {
	height: 1.25rem;
	width: 1.25rem;
}

// Set z-index for loading overlay so that it is over drop in UI
.loading-overlay {
	z-index: 500;
}
</style>

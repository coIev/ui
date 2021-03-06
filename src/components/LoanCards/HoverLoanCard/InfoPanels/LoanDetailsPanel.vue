<template>
	<info-panel
		:id="elementId"
		:expandable="expandable"
		panel-id="loan-details"
		@track-interaction="trackInteraction"
	>
		<template #title>
			Loan Details
		</template>
		<div v-if="!loanLength" id="loading-overlay">
			<div class="spinner-wrapper">
				<kv-loading-spinner />
			</div>
		</div>
		<div
			v-else
			class="loan-details-container"
		>
			<ul>
				<li v-if="this.loanLength">
					<label>Loan length:</label>
					<span class="data">
						{{ loanLength }} months
					</span>
				</li>
				<li v-if="this.repaymentSchedule">
					<label>Repayment schedule:</label>
					<span class="data repayment-schedule-text">
						{{ repaymentSchedule }}
					</span>
				</li>
				<li v-if="this.disbursalDate">
					<label>Disbursal date:</label>
					<p class="data">
						{{ disbursalDateFormatted }}
					</p>
				</li>
				<li v-if="this.fundingModel !== ''">
					<label>Funding model:</label>
					<p class="data funding-model-text">
						{{ fundingModelFormatted }}
					</p>
				</li>
				<li>
					<label v-if="this.currencyLossLiability">
						Partner covers currency loss:
					</label>
					<label v-else>Currency exchange loss:</label>
					<p class="data">
						{{ currencyLossLiabilityFormatted }}
					</p>
				</li>
				<li v-if="this.facilitatedByFieldPartner">
					<label>Facilitated by Field Partner/trustee:</label>
					<p class="data">
						{{ facilitatedByFieldPartnerFormatted }}
					</p>
				</li>
				<li v-if="this.borrowerPayingInterest">
					<label>Is borrower paying interest?</label>
					<p class="data">
						{{ borrowerPayingInterestFormatted }}
					</p>
				</li>
				<li v-if="this.riskRating">
					<label>Field Partner risk rating:</label>
					<p class="data">
						{{ riskRating }} stars
					</p>
				</li>
			</ul>
			<ul
				v-if="this.fundsLentInCountry
					|| this.partnerLoansCurrentlyFundraising
					|| this.directLoansCurrentlyFundraising"
			>
				<h3 class="country-heading">
					{{ country }} country facts
				</h3>
				<!-- <li v-if="this.avgAnnualIncome">
					<label>Average annual income (USD):</label>
					<p class="data">
						{{ avgAnnualIncome }}
					</p>
				</li> -->
				<li v-if="this.fundsLentInCountry">
					<label>Funds lent in {{ country }}:</label>
					<p class="data">
						{{ fundsLentInCountryFormatted }}
					</p>
				</li>
				<li v-if="this.partnerLoansCurrentlyFundraising">
					<label>Loans currently fundraising:</label>
					<p class="data">
						{{ partnerLoansCurrentlyFundraising }}
					</p>
				</li>
				<li v-if="this.directLoansCurrentlyFundraising">
					<label>Loans currently fundraising:</label>
					<p class="data">
						{{ directLoansCurrentlyFundraising }}
					</p>
				</li>
				<!-- <li v-if="this.loansTransactedIn">
					<label>Loans transacted in:</label>
					<p class="data">
						{{ loansTransactedIn }}
					</p>
				</li> -->
			</ul>
			<div v-if="this.whySpecial">
				<h3 class="why-special">
					This loan is special because
				</h3>
				<p class="data">
					{{ whySpecial }}
				</p>
			</div>
		</div>
	</info-panel>
</template>

<script>
import _get from 'lodash/get';
import numeral from 'numeral';
import { format, parseISO } from 'date-fns';
import loanDetailsQuery from '@/graphql/query/loanDetails.graphql';
import KvLoadingSpinner from '@/components/Kv/KvLoadingSpinner';
import InfoPanel from './InfoPanel';

export default {
	components: {
		InfoPanel,
		KvLoadingSpinner
	},
	inject: ['apollo'],
	props: {
		expandable: {
			type: Boolean,
			default: true,
		},
		loanId: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			country: '',
			disbursalDate: '',
			loanLength: '',
			repaymentSchedule: '',
			borrowerPayingInterest: '',
			facilitatedByFieldPartner: '',
			whySpecial: '',
			riskRating: '',
			avgAnnualIncome: '',
			fundsLentInCountry: '',
			partnerLoansCurrentlyFundraising: '',
			directLoansCurrentlyFundraising: '',
			fundingModel: '',
			// loansTransactedIn: 'test',
			currencyLossLiability: '',
			currencyExchangeLoss: '',
		};
	},
	apollo: {
		query: loanDetailsQuery,
		variables() {
			return {
				id: parseInt(this.loanId, 10),
			};
		},
		result({ data }) {
			this.country = _get(data, 'lend.loan.geocode.country.name');
			this.disbursalDate = _get(data, 'lend.loan.disbursalDate');
			this.loanLength = _get(data, 'lend.loan.lenderRepaymentTerm');
			this.repaymentSchedule = _get(data, 'lend.loan.repaymentInterval');
			this.borrowerPayingInterest = _get(data, 'lend.loan.partner.chargesFeesInterest');
			this.facilitatedByFieldPartner = _get(data, 'lend.loan.partnerName');
			this.trustee = _get(data, 'lend.loan.trustee.name');
			this.whySpecial = _get(data, 'lend.loan.whySpecial');
			this.avgAnnualIncome = _get(data, 'lend.loan.partner.countries[0].ppp');
			this.fundsLentInCountry = _get(data, 'lend.loan.partner.countries[0].fundsLentInCountry');
			this.partnerLoansCurrentlyFundraising = _get(data, 'lend.loan.partner.countries[0].numLoansFundraising');
			this.directLoansCurrentlyFundraising = _get(data, 'lend.loan.trusteeStats.numLoansFundraising');
			this.fundingModel = _get(data, 'lend.loan.terms.flexibleFundraisingEnabled');
			this.currencyLossLiability = _get(data, 'lend.loan.terms.lossLiabilityCurrencyExchange');
			this.currencyExchangeLoss = _get(data, 'lend.loan.hasCurrencyExchangeLossLenders');

			// This needs to be formatted from the returned string into a star display
			// Ticket created for this: cash-1151
			this.riskRating = _get(data, 'lend.loan.partner.riskRating');
		},
	},
	computed: {
		elementId() {
			return `${this.loanId}-loan-details-panel-ex-${this.expandable ? '1' : '0'}`;
		},
		disbursalDateFormatted() {
			return format(parseISO(this.disbursalDate), 'MMMM dd, yyyy');
		},
		fundsLentInCountryFormatted() {
			return numeral(this.fundsLentInCountry).format('$0,0');
		},
		borrowerPayingInterestFormatted() {
			// Alters borrowerPayingInterest boolean FROM true/false TO yes/no
			let formattedReturn = this.borrowerPayingInterest;
			if (formattedReturn === false) {
				formattedReturn = 'No';
			}
			if (formattedReturn === true) {
				formattedReturn = 'Yes';
			}
			return formattedReturn;
		},
		facilitatedByFieldPartnerFormatted() {
			let facilitatedByFieldPartnerFormatted = '';
			if (this.facilitatedByFieldPartner !== '') {
				facilitatedByFieldPartnerFormatted = this.facilitatedByFieldPartner;
			} else if (this.trustee !== '') {
				facilitatedByFieldPartnerFormatted = this.trustee;
			} else if (this.facilitatedByFieldPartner === '' && this.trustee === '') {
				facilitatedByFieldPartnerFormatted = 'Not facilitated by a Field Partner or Trustee';
			}
			return facilitatedByFieldPartnerFormatted;
		},
		fundingModelFormatted() {
			if (this.fundingModel === true) {
				return 'flexible';
			}
			return 'fixed';
		},
		currencyLossLiabilityFormatted() {
			let currencyLossLiabilityFormatted = '';
			if (this.currencyLossLiability === '' || this.currencyLossLiability === 'none') {
				currencyLossLiabilityFormatted = 'N/A';
			} else if (this.currencyLossLiability === 'shared') {
				currencyLossLiabilityFormatted = 'Partially';
			} else if (this.currencyLossLiability === 'partner') {
				currencyLossLiabilityFormatted = 'Yes';
			} else if (this.currencyLossLiability === 'lender') {
				currencyLossLiabilityFormatted = 'No';
			}
			return currencyLossLiabilityFormatted;
		}
	},
	methods: {
		trackInteraction(args) {
			this.$emit('track-interaction', args);
		},
	},
};
</script>

<style lang="scss">
@import 'settings';

.panel-title {
	margin-bottom: rem-calc(10);
}

ul {
	list-style: none;
	margin-left: 0;
}

.data {
	color: $kiva-icon-green;
	margin-bottom: 0;
}

.repayment-schedule-text,
.funding-model-text {
	text-transform: capitalize;
}

.country-heading,
.why-special {
	color: $black;
}
</style>

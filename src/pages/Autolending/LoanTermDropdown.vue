<template>
	<div>
		<h3 class="filter-title">
			Loan terms
		</h3>
		<kv-dropdown-rounded v-model="loanTerm">
			<option value="0">
				All loan terms
			</option>
			<option value="6">
				6 months or less
			</option>
			<option value="12">
				12 months or less
			</option>
			<option value="18">
				18 months or less
			</option>
			<option value="24">
				24 months or less
			</option>
		</kv-dropdown-rounded>
	</div>
</template>

<script>
import _get from 'lodash/get';
import gql from 'graphql-tag';
import KvDropdownRounded from '@/components/Kv/KvDropdownRounded';

export default {
	inject: ['apollo'],
	components: {
		KvDropdownRounded,
	},
	data() {
		return {
			loanTerm: 0,
		};
	},
	apollo: {
		query: gql`query autolendProfileLoanTerm {
			autolending @client {
				currentProfile {
					id
					loanSearchCriteria {
						filters {
							lenderTerm {
								max
							}
						}
					}
				}
			}
		}`,
		preFetch: true,
		result({ data }) {
			this.loanTerm = _get(data, 'autolending.currentProfile.loanSearchCriteria.filters.lenderTerm.max') || 0;
		},
	},
	watch: {
		loanTerm(loanTermMax, previousLoanTermMax) {
			if (loanTermMax !== previousLoanTermMax) {
				this.apollo.mutate({
					mutation: gql`mutation updateLoamTerm($max: Float) {
						autolending @client {
							editProfile(profile: {
								loanSearchCriteria: {
									filters: {
										lenderTerm: {
											min: 0
											max: $max
										}
									}
								}
							})
						}
					}`,
					variables: {
						max: Number(loanTermMax) || null,
					},
				});
			}
		}
	},
};
</script>

<style lang="scss">
</style>

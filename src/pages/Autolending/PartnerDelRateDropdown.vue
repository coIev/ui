<template>
	<div>
		<h3 class="filter-title">
			Field Partner delinquency rates
		</h3>
		<kv-dropdown-rounded v-model="delinquencyRate">
			<option value="0">
				All delinquency rates
			</option>
			<option value="0.05">
				5% or less
			</option>
			<option value="0.1">
				10% or less
			</option>
			<option value="0.15">
				15% or less
			</option>
			<option value="0.2">
				20% or less
			</option>
			<option value="0.25">
				25% or less
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
			delinquencyRate: 0,
		};
	},
	apollo: {
		query: gql`query autolendProfileArrearsRate {
			autolending @client {
				currentProfile {
					id
					loanSearchCriteria {
						filters {
							arrearsRate {
								max
							}
						}
					}
				}
			}
		}`,
		preFetch: true,
		result({ data }) {
			// eslint-disable-next-line max-len
			this.delinquencyRate = _get(data, 'autolending.currentProfile.loanSearchCriteria.filters.arrearsRate.max') || 0;
		},
	},
	watch: {
		delinquencyRate(delinquencyRateMax, previousDelinquencyRateMax) {
			if (delinquencyRateMax !== previousDelinquencyRateMax) {
				this.apollo.mutate({
					mutation: gql`mutation updateArrearsRate($max: Float) {
						autolending @client {
							editProfile(profile: {
								loanSearchCriteria: {
									filters: {
										arrearsRate: {
											min: 0
											max: $max
										}
									}
								}
							})
						}
					}`,
					variables: {
						max: Number(delinquencyRateMax) || null,
					},
				});
			}
		}
	},
};
</script>

<style lang="scss">
</style>

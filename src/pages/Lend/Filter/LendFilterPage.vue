<template>
	<www-page class="lend-filter-page" :gray-background="true" :hide-search-in-header="algoliaSearchEnabled">
		<kv-message>
			Welcome to Kiva's new filter page! Take it for a spin below, or
			<a @click="exitLendFilterExp('click-return-classic')">return to the classic view</a> at any time.
		</kv-message>
		<lend-header
			:hard-left-align="true"
			:side-pinned-filter-padding="filterMenuPinned"
			class="filter-page-lend-header"
			browse-url="/lend-by-category"
			filter-url="/lend/filter"
		/>
		<div class="row page-content" :class="{'filter-menu-pinned': filterMenuPinned}">
			<ais-instant-search
				v-if="searchClient"
				class="instant-search-container"
				:search-client="searchClient"
				:index-name="algoliaDefaultIndex"
				:routing="routing"
			>
				<lend-filter-menu
					:default-sort-indices="defaultSortIndices"
					:selected-custom-categories="selectedCustomCategories"
					:all-locations-lvl1="allLocationsLvl1"
					:all-sector-names="allSectorNames"
					:all-loan-theme-names="allLoanThemeNames"
					:all-tag-names="allTagNames"
					:filter-menu-pinned="filterMenuPinned"
					:initially-expanded-filters="initiallyExpandedFilters"
					@clear-custom-categories="clearCustomCategories"
					@hide-filter-menu="hideFilterMenu"
					@show-filter-menu="showFilterMenu"
					@toggle-custom-category="toggleCustomCategory"
					@exit-lend-filter-exp="exitLendFilterExp('click-advanced-filters')"
				/>
				<!-- eslint-disable vue/attribute-hyphenation -->
				<div class="lend-filter-results-container small-12 columns">
					<ais-configure
						:hitsPerPage="15"
						:disjunctiveFacetsRefinements="disjunctiveFacets"
						clickAnalytics="true"
						:removeWordsIfNoResults="removeWordsIfNoResults"
						:userToken="userId.toString()"
						ref="aisConfigure"
					/>
					<selected-refinements
						class="selected-refinements-component"
						:selected-custom-categories="selectedCustomCategories"
						@remove-custom-category="removeCustomCategory"
						@clear-custom-categories="clearCustomCategories"
					/>
					<algolia-search-box class="algolia-search-box-component" v-if="algoliaSearchEnabled" />
					<!-- eslint-disable-next-line max-len -->
					<algolia-pagination-stats class="algolia-pagination-stats-component" />
					<ais-state-results class="ais-state-results-component">
						<template slot-scope="{ page, hitsPerPage, queryID, index }">
							<ais-hits
								class="loan-card-group row"
								:class="{'filter-menu-open': filterMenuOpen}"
								:results-per-page="15"
							>
								<template slot="default" slot-scope="{ items }">
									<algolia-adapter
										v-for="(item, itemIndex) in items" :key="item.id"
										:loan="item"
										:items-in-basket="itemsInBasket"
										:is-logged-in="isLoggedIn"
										:user-id="userId.toString()"
										loan-card-type="ListLoanCard"
										:algolia-props="{ page, hitsPerPage, queryID, index, itemIndex, item }"
										class="small-12 columns"
									/>
								</template>
							</ais-hits>
						</template>
					</ais-state-results>
					<algolia-pagination-wrapper :padding="2" class="algolia-pagination-component" />
					<algolia-pagination-hits-per-page class="algolia-pagination-hits-per-page-component" />

					<ais-state-results>
						<template slot-scope="stateData">
							<algolia-track-state :state-data-hits="stateData.hits" />
						</template>
					</ais-state-results>
				</div>
				<!-- eslint-enable vue/attribute-hyphenation -->
			</ais-instant-search>
		</div>
	</www-page>
</template>

<script>
import _get from 'lodash/get';
import _map from 'lodash/map';
import _forEach from 'lodash/forEach';

// Algolia Imports
import {
	AisConfigure,
	AisInstantSearch,
	AisHits,
	AisStateResults,
} from 'vue-instantsearch';
import algoliaInit from '@/plugins/algolia-init-mixin';
import algoliaCustomCategories from '@/plugins/algolia-custom-categories-mixin';
import AlgoliaAdapter from '@/components/LoanCards/AlgoliaLoanCardAdapter';
import AlgoliaPaginationHitsPerPage from '@/pages/Lend/AlgoliaPaginationHitsPerPage';
import AlgoliaPaginationStats from '@/pages/Lend/AlgoliaPaginationStats';
import AlgoliaPaginationWrapper from '@/pages/Lend/AlgoliaPaginationWrapper';
import LendFilterMenu from '@/pages/Lend/Filter/FilterComponents/LendFilterMenu';
import SelectedRefinements from '@/pages/Lend/Filter/FilterComponents/SelectedRefinements';
import AlgoliaSearchBox from '@/pages/Lend/AlgoliaSearchBox';
import AlgoliaTrackState from '@/pages/Lend/Filter/FilterComponents/AlgoliaTrackState';

import cookieStore from '@/util/cookieStore';
// TODO: Use this
// import KvLoadingOverlay from '@/components/Kv/KvLoadingOverlay';
import WwwPage from '@/components/WwwFrame/WwwPage';
import LendHeader from '@/pages/Lend/LendHeader';
import KvMessage from '@/components/Kv/KvMessage';

import lendFilterPageQuery from '@/graphql/query/lendFilterPage.graphql';

import lendFilterExpMixin from '@/plugins/lend-filter-page-exp-mixin';

export default {
	components: {
		KvMessage,
		SelectedRefinements,
		// TODO: Use this
		// KvLoadingOverlay,
		WwwPage,
		LendHeader,
		LendFilterMenu,
		AisConfigure,
		AisInstantSearch,
		AisHits,
		AisStateResults,
		AlgoliaAdapter,
		AlgoliaPaginationHitsPerPage,
		AlgoliaPaginationStats,
		AlgoliaPaginationWrapper,
		AlgoliaTrackState,
		AlgoliaSearchBox,
	},
	metaInfo: {
		title: 'Lend Filter'
	},
	mixins: [
		algoliaInit,
		algoliaCustomCategories,
		lendFilterExpMixin,
	],
	created() {
		// subscribe to and set page query data
		this.apollo.watchQuery({
			query: lendFilterPageQuery,
			variables: {
				basketId: cookieStore.get('kvbskt'),
			},
		}).subscribe({
			next: ({ data }) => {
				// Set items in basket (prefetch also sets up the subscribe query)
				this.itemsInBasket = _map(_get(data, 'shop.basket.items.values'), 'id');
				// Set user status
				this.isLoggedIn = _get(data, 'my.userAccount.id') !== undefined || false;
				this.userId = _get(data, 'my.userAccount.id') || '';
			},
		});

		// Get Lend Filter Exp version
		this.getLendFilterExpVersion();
	},
	data() {
		return {
			itemsInBasket: null,
			isLoggedIn: false,
			userId: '',
			filterMenuOpen: false,
			selectedCustomCategories: {},
			filterMenuPinned: false,
			algoliaSearchEnabled: true,
			removeWordsIfNoResults: 'lastWords', // default: 'none', options: 'firstWords' 'lastWords' 'allOptional'
			initiallyExpandedFilters: false,
		};
	},
	computed: {
		disjunctiveFacets() {
			const sectorKey = 'sector.name';
			const themeDataKey = 'themeData.loanThemeTypeName';
			const tagsKey = 'tags.name';
			let sectorSet = new Set();
			let themeDataSet = new Set();
			let tagsSet = new Set();

			_forEach(this.selectedCustomCategories, (selected, customCategoryId) => {
				if (!selected) {
					return;
				}

				const customCategoryFacets = this.customCategories[customCategoryId].disjunctiveFacets;

				sectorSet = customCategoryFacets[sectorKey] && customCategoryFacets[sectorKey].length
					? new Set([...sectorSet, ...customCategoryFacets[sectorKey]])
					: sectorSet;
				themeDataSet = customCategoryFacets[themeDataKey] && customCategoryFacets[themeDataKey].length
					? new Set([...themeDataSet, ...customCategoryFacets[themeDataKey]])
					: themeDataSet;
				tagsSet = customCategoryFacets[tagsKey] && customCategoryFacets[tagsKey].length
					? new Set([...tagsSet, ...customCategoryFacets[tagsKey]])
					: tagsSet;
			});

			return {
				'sector.name': Array.from(sectorSet),
				'themeData.loanThemeTypeName': Array.from(themeDataSet),
				'tags.name': Array.from(tagsSet),
			};
		},
	},
	inject: [
		'apollo',
	],
	apollo: {
		preFetch(config, client) {
			// prefetch page data + experiment settings
			return client.query({
				query: lendFilterPageQuery,
				variables: {
					basketId: cookieStore.get('kvbskt')
				},
			});
		}
	},
	mounted() {
		// show pinned filters when  screen size >= 1194px
		if (window.innerWidth >= 1194) {
			this.filterMenuPinned = true;
		}

		// update global lend filter experiment setting
		this.updateLendFilterExp();
	},
	methods: {
		hideFilterMenu() {
			this.filterMenuOpen = false;
			this.$kvTrackEvent('Lending', 'close-lend-filter-menu');
		},
		showFilterMenu() {
			this.filterMenuOpen = true;
			this.$kvTrackEvent('Lending', 'open-lend-filter-menu');
		},
		toggleCustomCategory(categoryId) {
			this.$set(
				this.selectedCustomCategories,
				categoryId,
				!this.selectedCustomCategories[categoryId],
			);
		},
		removeCustomCategory(categoryId) {
			this.$set(
				this.selectedCustomCategories,
				categoryId,
				false,
			);
		},
		clearCustomCategories() {
			_forEach(this.selectedCustomCategories, (_, categoryId) => {
				this.$set(
					this.selectedCustomCategories,
					categoryId,
					false,
				);
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import 'settings';

.lend-filter-page {
	$filter-transition: 0.25s ease-out;

	scroll-behavior: smooth;

	.page-content {
		.instant-search-container {
			width: 100%;

			.lend-filter-results-container {
				.algolia-search-box-component {
					margin-top: 1.125rem;
				}

				.loan-card-group {
					opacity: 1;
					transition: opacity $filter-transition;

					&.filter-menu-open {
						opacity: 0.2;
					}
				}

				.algolia-pagination-stats-component {
					display: none;

					@include breakpoint(1194px) {
						display: block;
					}
				}
			}
		}

		&.filter-menu-pinned {
			@include breakpoint(1194px) {
				max-width: rem-calc(1174);

				.instant-search-container {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.lend-filter-results-container {
						max-width: calc(100% - 21rem);
						display: flex;
						flex-direction: column;

						.algolia-search-box-component {
							margin-top: 0;
							max-width: initial;
							height: 49px;
							order: 0;
							margin-bottom: 0.5rem;
						}

						.selected-refinements-component {
							order: 1;
						}

						.algolia-pagination-stats-component {
							display: flex;
							order: 2;
						}

						.ais-state-results-component {
							order: 3;
						}

						.algolia-pagination-component {
							order: 4;
						}

						.algolia-pagination-hits-per-page-component {
							order: 5;
						}
					}
				}
			}
		}
	}
}
</style>

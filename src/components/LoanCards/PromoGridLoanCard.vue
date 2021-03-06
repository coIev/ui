<template>
	<div
		class="promo-grid-card"
		:class="compact ? 'compact': ''"
	>
		<kv-responsive-image class="promo-background-image" :images="backgroundImage" loading="lazy" alt="" />
		<div class="promo-content-wrapper">
			<div class="promo-content">
				<h3
					class="promo-content-title"
					:class="compact ? 'h2' : 'h1'"
				>
					Make a<br class="su">monthly impact
				</h3>
				<p v-if="categoryLabel">
					We’ll lend to {{ categoryLabel }} for you every month with a Monthly Good subscription.
				</p>
				<p v-else>
					We’ll make a loan for you every month with a Monthly Good subscription.
				</p>
				<kv-button
					:class="compact ? 'smallest' : 'small'"
					:href="categoryUrl"
					v-kv-track-event="['Lending', 'PromoGridCard-click-Learn more', 'CASH-1426 Dec2019']"
				>
					Learn more
				</kv-button>
			</div>
		</div>
	</div>
</template>

<script>
import { paramCase } from 'change-case';

import KvButton from '@/components/Kv/KvButton';
import KvResponsiveImage from '@/components/Kv/KvResponsiveImage';

const promoLoanImageRequire = require.context('@/assets/images/mg-promo-loan-card/', true);

export default {
	components: {
		KvButton,
		KvResponsiveImage
	},
	props: {
		categoryLabel: {
			type: String,
			default: ''
		},
		categoryUrl: {
			type: String,
			default: '/monthlygood',
		},
		compact: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		backgroundImage() {
			if (this.categoryLabel) {
				return [
					['small', promoLoanImageRequire(`./mg-promo-${paramCase(this.categoryLabel)}-std.jpg`)],
					['small retina', promoLoanImageRequire(`./mg-promo-${paramCase(this.categoryLabel)}-retina.jpg`)],
				];
			}
			return [
				['small', promoLoanImageRequire('./mg-promo-default-std.jpg')],
				['small retina', promoLoanImageRequire('./mg-promo-default-retina.jpg')],
			];
		}
	},
};
</script>

<style lang="scss" scoped>
@import 'settings';

.promo-grid-card {
	background-color: $white;
	border: 1px solid $kiva-stroke-gray;
	height: 100%;
	width: 100%;
	overflow: hidden;
	position: relative;

	&:hover {
		box-shadow: rem-calc(2) rem-calc(2) rem-calc(4) rgba(0, 0, 0, 0.1);
	}
}

.promo-background-image {
	position: relative;
	width: 100%;
	height: 100%;

	::v-deep {
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
		}
	}

	&::after {
		display: block;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(transparent 25%, rgb(61, 61, 61) 80%);
	}
}

.promo-content-wrapper {
	z-index: 1;
	width: 100%;
	text-align: center;
	padding: 1rem;
	position: absolute;
	bottom: 2rem;
	color: white;

	p {
		font-size: 1.25rem;
		line-height: 1.6rem;
		margin-bottom: 2rem;
	}
}

.promo-content-title {
	font-weight: 600;
}

.compact {
	.promo-content-wrapper {
		bottom: 0.5rem;

		p {
			margin-bottom: 1rem;
		}
	}
}
</style>

<template>
	<kv-hero class="donation-hero">
		<template v-slot:images>
			<kv-responsive-image
				class="donation-hero-picture show-for-large"
				:images="heroImages"
				alt=""
			/>
		</template>
		<template v-slot:overlayContent>
			<div class="row">
				<div class="
						overlay-column columns
						medium-10 medium-offset-1 large-8 large-offset-0 xlarge-7 xxlarge-6"
				>
					<h1 class="donate-headline" v-html="headlineCopy"></h1>
					<p class="donate-subhead" v-html="subheadCopy"></p>
					<donate-form
						:key="1"
						:button-text="buttonCopy"
						:data="donationValues"
						:form-disclaimer="formDisclaimer"
					/>
				</div>
			</div>
		</template>
	</kv-hero>
</template>
<script>
import _get from 'lodash/get';
import KvHero from '@/components/Kv/KvHero';
import KvResponsiveImage from '@/components/Kv/KvResponsiveImage';
import { documentToHtmlString } from '~/@contentful/rich-text-html-renderer';
import DonateForm from './DonateForm';

const heroImagesRequire = require.context('@/assets/images/donate-macro-hero', true);

export default {
	props: {
		data: {
			type: Object,
			default: null,
		},
	},
	metaInfo: {
		title: 'Donate to Kiva today!'
	},
	components: {
		KvHero,
		DonateForm,
		KvResponsiveImage,
	},
	data() {
		return {
			// TODO: These need to be hooked up to the files in contentful still
			// https://app.contentful.com/spaces/j0p9a6ql0rn7/environments/development/entries/6pXrrPQucbeNLqf47tW3wh
			heroImages: [
				['small', heroImagesRequire('./donate-1-sm-standard.jpg')],
				['small retina', heroImagesRequire('./donate-1-sm-retina.jpg')],
				['medium', heroImagesRequire('./donate-2-med-standard.jpg')],
				['medium retina', heroImagesRequire('./donate-2-med-retina.jpg')],
				['large', heroImagesRequire('./donate-3-lg-standard.jpg')],
				['large retina', heroImagesRequire('./donate-3-lg-retina.jpg')],
				['xxlarge', heroImagesRequire('./donate-4-xxl-standard.jpg')],
				['xxlarge retina', heroImagesRequire('./donate-4-xxl-retina.jpg')],
				['xga', heroImagesRequire('./donate-5-xga-standard.jpg')],
				['xga retina', heroImagesRequire('./donate-5-xga-retina.jpg')],
				['wxga', heroImagesRequire('./donate-6-wxga-standard.jpg')],
				['wga retina', heroImagesRequire('./donate-6-wxga-retina.jpg')],
			],
		};
	},
	computed: {
		donationHeroContent() {
			return _get(this.data, 'page.pageLayout.fields.contentGroups[0].fields.contents[1].fields');
		},
		headlineCopy() {
			return _get(this.donationHeroContent, 'headline');
		},
		subheadCopy() {
			return _get(this.donationHeroContent, 'subHeadline');
		},
		buttonCopy() {
			return _get(this.donationHeroContent, 'primaryCtaText');
		},
		// Will be used once images are coming through from contentful
		zeroImages() {
			// eslint-disable-next-line
			const donationImages = _get(this.data, 'page.pageLayout.fields.contentGroups[0].fields.contents[0].fields.images');
			return donationImages;
		},
		donationValues() {
			// defining the donation dollar amount to pass down for button values
			// eslint-disable-next-line
			const donationAmounts = _get(this.data, 'page.pageLayout.fields.contentGroups[0].fields.contents[2].fields.dataObject.amounts');
			return donationAmounts;
		},
		formDisclaimer() {
			// extracting form disclaimer from contentful to pass into form
			const formDisclaimerContent = _get(
				this.data,
				'page.pageLayout.fields.contentGroups[0].fields.contents[3].fields.richText'
			);
			return documentToHtmlString(formDisclaimerContent);
		},
	}
};
</script>

<style lang="scss" scoped>
@import 'settings';

.donation-hero {
	// background-color: #fdf7eb;
	background-color: #EEEFE9;
	margin-bottom: 0;
	padding-bottom: 1rem;
	position: relative;
	overflow: hidden;

	::v-deep .overlay-holder {
		display: flex;
		flex-direction: column-reverse;

		.donation-hero-picture {
			@include breakpoint(large) {
				position: absolute;
				top: 0;
				bottom: 0;
			}

			// Prevent whitespace below the image in browsers that understand object-fit. (IE11 will see some whitepace)
			@supports (object-fit: cover) {
				img {
					object-fit: cover;
					object-position: 50% 25%; // keep the illustrations heads visible
					height: 100%;
					width: 100%;
				}
			}
		}

		.overlay-content {
			margin-top: 1rem;
			margin-left: 1rem;
			margin-right: 1rem;
			z-index: 1;
			position: relative;
			top: auto;
			width: auto;
			transform: none;

			@include breakpoint(large) {
				margin-top: 2.5rem;
				margin-bottom: 1.5rem;
			}

			.overlay-column {
				max-width: none;
				padding: 1.5rem 1.5rem 1.25rem;
				background-color: $white;
				border-radius: 1rem;
				// initial idea for giving some definition to the form over a white bg
				box-shadow: 0 0 rem-calc(4) rgba(0, 0, 0, 0.2);

				@include breakpoint(large) {
					max-width: 31.25rem;
					padding: 2.5rem 2.5rem 2.25rem;
				}
			}
		}
	}

	//set min height to improve sizing when image has not loaded yet
	min-height: 6.25rem;

	@include breakpoint(xlarge) {
		min-height: 20rem;
		flex-direction: column;
	}
	@include breakpoint(xxlarge) {
		min-height: 24.65rem;
	}
	@include breakpoint(xga) {
		min-height: 27rem;
	}
}

.donation-headline {
	@include large-text();

	margin-bottom: 0.25rem;
}

.donation-subhead {
	@include medium-text();

	padding: 0;
	margin-bottom: 1.5rem;
}
</style>

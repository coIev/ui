<template>
	<tertiary-menu>
		<ul>
			<li>
				<router-link
					to="/settings/account"
					v-kv-track-event="['TertiaryNav','click-MyKiva-Settings-account']"
				>
					Account
				</router-link>
			</li>
			<li>
				<router-link
					to="/settings/credit"
					v-kv-track-event="['TertiaryNav','click-MyKiva-Settings-credit']"
				>
					Credit
				</router-link>
			</li>
			<li>
				<router-link
					to="/settings/email"
					v-kv-track-event="['TertiaryNav','click-MyKiva-Settings-email']"
				>
					Email
				</router-link>
			</li>
			<li>
				<router-link
					to="/settings/data"
					v-kv-track-event="['TertiaryNav','click-Settings-data']"
				>
					Data
				</router-link>
			</li>
			<li v-if="isMfaActive">
				<router-link
					to="/settings/security"
					v-kv-track-event="['TertiaryNav','click-MyKiva-Settings-security']"
				>
					Security and login
				</router-link>
			</li>
			<li>
				<router-link
					to="/lend/saved-search"
					v-kv-track-event="['TertiaryNav','click-MyKiva-Settings-saved-searches']"
				>
					Saved searches
				</router-link>
			</li>
		</ul>
	</tertiary-menu>
</template>

<script>
import gql from 'graphql-tag';
import TertiaryMenu from '@/components/WwwFrame/TertiaryMenu';

const pageQuery = gql`query mfaFeatureFlagQuery {
	general {
		mfaEnabled: featureSetting(key: "mfa.enabled") {
			key
			value
		}
	}
}`;

export default {
	components: { TertiaryMenu },
	inject: ['apollo'],
	data() {
		return {
			isMfaActive: false,
		};
	},
	apollo: {
		query: pageQuery,
		prefetch: true,
		result({ data }) {
			this.isMfaActive = data?.general?.mfaEnabled?.value === 'true';
		},
	},
};
</script>

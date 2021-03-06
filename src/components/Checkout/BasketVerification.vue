<template>
	<!-- NB: Reusing .order-totals .forced-width styling. -->
	<div class="basket-verification order-totals">
		<div
			v-if="verificationState === 'verified'"
			class="verification-verified forced-width"
		>
			<div class="forced-width">
				Basket Verified!
			</div>
		</div>

		<kv-lightbox
			:visible="visible && verificationState === 'required'"
			class="verification-required"
			title="Verify your email"
			@lightbox-closed="close"
		>
			<p>To ensure your safety, we added an extra layer of security.</p>
			<p>Once we verify your account, you can continue checking out!</p>
			<kv-button v-if="!sending" @click.native="send">
				Send verification link
			</kv-button>
			<kv-loading-spinner class="sending-spinner" v-else />
		</kv-lightbox>

		<kv-lightbox
			:visible="visible && verificationState === 'pending'"
			class="verification-pending"
			title="Verification link sent"
			@lightbox-closed="close"
		>
			<p>We sent a validation link <span v-if="email" class="email">to {{ email }}</span>.</p>
			<p>After receiving the email, follow the link provided to continue checking out with your Kiva Credit.</p>
			<kv-button v-if="!sending" @click.native="send">
				Resend email
			</kv-button>
			<kv-loading-spinner class="sending-spinner" v-else />
			<p>
				<router-link to="/help/contact-us">
					Need help? Contact us
				</router-link>
			</p>
		</kv-lightbox>
	</div>
</template>

<script>
import * as Sentry from '@sentry/browser';
import KvButton from '@/components/Kv/KvButton';
import KvLightbox from '@/components/Kv/KvLightbox';
import KvLoadingSpinner from '@/components/Kv/KvLoadingSpinner';
import getVerificationState from '@/graphql/query/checkout/basketVerificationState.graphql';
import startBasketVerificationMutation from '@/graphql/mutation/checkout/startBasketVerification.graphql';
import closeVerificationLightboxMutation from '@/graphql/mutation/checkout/closeVerificationLightbox.graphql';

export default {
	components: {
		KvButton,
		KvLightbox,
		KvLoadingSpinner,
	},
	inject: ['apollo'],
	data() {
		return {
			email: '',
			verificationState: '',
			visible: false,
			sending: false,
		};
	},
	apollo: {
		preFetch: true,
		query: getVerificationState,
		result({ data }) {
			this.verificationState = data?.shop?.basketVerificationState || this.verificationState || '';
			this.email = data?.my?.userAccount?.email || this.email || '';
			this.visible = data?.verificationLightbox?.visible || false;
		},
	},
	methods: {
		close() {
			this.apollo.mutate({ mutation: closeVerificationLightboxMutation });
		},
		send() {
			this.sending = true;
			this.apollo.mutate({
				mutation: startBasketVerificationMutation,
				awaitRefetchQueries: true,
				refetchQueries: [
					{ query: getVerificationState },
				],
			}).then(result => {
				this.sending = false;
				if (result.error) {
					this.handleError(result.error);
				}
			}).catch(error => {
				this.sending = false;
				this.handleError(error);
			});
		},
		handleError(err) {
			console.error(err);
			this.$showTipMsg('There was a problem sending the verification email.', 'error');
			try {
				Sentry.captureException(err);
			} catch (e) {
				// no-op
			}
		}
	},
};
</script>

<style lang="scss" scoped>
.verification-verified {
	text-align: right;
}

.verification-pending,
.verification-required {
	text-align: center;
}
</style>

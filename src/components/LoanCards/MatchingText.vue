<template functional>
	<span
		class="small-text matching-text"
		:class="{
			'has-match': props.matchingText,
			'hide-match': props.isFunded || props.isSelectedByAnother || props.isExpired,
			'wrap': props.wrap,
		}"
	>
		2x matching by {{ props.matchingText }}
	</span>
</template>

<style lang="scss" scoped>
@import 'settings';

.matching-text {
	display: block;
	color: $kiva-text-light;
	visibility: hidden;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	&.has-match {
		visibility: visible;
	}

	&.has-match.hide-match {
		visibility: hidden;
	}

	&.wrap {
		white-space: normal;
		line-height: rem-calc(18);
	}
}
</style>

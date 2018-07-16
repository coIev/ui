import apolloMixin from './apollo-mixin';
import kebabCaseFilter from './kebab-case-filter';
import numeralFilter from './numeral-filter';
import kvAnayltics from './kv-analytics-plugin';
import tipMessage from './tip-message-mixin';

export default {
	install: Vue => {
		Vue.mixin(apolloMixin);
		Vue.filter('kebabCase', kebabCaseFilter);
		Vue.filter('numeral', numeralFilter);
		kvAnayltics(Vue);
		Vue.mixin(tipMessage);
	}
};

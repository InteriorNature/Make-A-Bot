const getPartsMixin = {
	created() {
		return this.$store.dispatch(getParts);
	},
	computed: {
		parts() {
			return this.$store.state.robots.parts || {
				heads: [],
				arms: [],
				torsos: [],
				parts: [],
			};
		},
	},
};
export default getPartsMixin;
import axios from 'axios';

export default {
namespaced: true,
state: {
  	cart: [],
  	parts: null,
  },
  mutations: {
  	addRobotToCart(state, robot) {
  		state.cart.push(robot);
    }, 
    updateParts(state, parts) {
      state.parts = parts;    
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state}, robot) {
    	const cart = [...state.cart, robot];
      //added return to axios statement after changing commit to dispatch in RobotBuilder
    	return axios.post('/api/cart', cart)    
    	  .then(() => commit('addRobotToCart', robot)); 
    },
  },
  getters: {
    cartSaleItems(state) {
  		return state.cart.filter(item => item.head.onSale || item.leftArm.onSale || item.torso.onSale
                                       || item.rightArm.onSale || item.base.onSale);
    },	
  },
};
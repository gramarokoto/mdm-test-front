import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: null,
  },
  mutations: {
    setCart: (state, cart) => {
      state.cart = cart;
    },
  },
  actions: {
    setCart: (context, cart) => {
      context.commit('setCart', cart);
      // localStorage.cart = JSON.stringify(cart);
    },
  },
  getters: {
    getCart: (state) => state.cart,
  },
});

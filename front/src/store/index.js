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
      console.log(state.cart);
      // localStorage.cart = JSON.stringify(state.cart);
    },
    removeProduct: (state, keyToDelete) => {
      console.log('mutations', keyToDelete);
      state.cart[keyToDelete] = {};
      delete state.cart[keyToDelete];
      // localStorage.cart = JSON.stringify(state.cart);
    },
  },
  actions: {
    setCart: (context, cart) => {
      context.commit('setCart', cart);
    },
    removeProduct: (context, keyToDelete) => {
      console.log('actions', keyToDelete);
      context.commit('removeProduct', keyToDelete);
    },
  },
  getters: {
    getCart: (state) => state.cart,
  },
});

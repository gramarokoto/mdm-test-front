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
      // localStorage.cart = JSON.stringify(state.cart);
    },
    removeProduct: (state, keyToDelete) => {
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
      context.commit('removeProduct', keyToDelete);
    },
  },
  getters: {
    getCart: (state) => state.cart,
    getCartTotal(state) {
      if (state.cart) {
        // eslint-disable-next-line arrow-body-style
        return Object.values(state.cart).reduce((prev, product) => {
          return prev + product.price.base.amount * product.qty;
        }, 0);
      }
      return null;
    },
    getCartTotalQty(state) {
      if (state.cart) {
        // eslint-disable-next-line arrow-body-style
        return Object.values(state.cart).reduce((prev, product) => {
          return prev + product.qty;
        }, 0);
      }
      return null;
    },
  },
});

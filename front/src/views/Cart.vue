<template>
  <div>
    <Cart @input="setCart" v-model="cart"/>
    <h4>Total panier : {{ $store.getters.getCartTotal }} €</h4>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue';

export default {
  name: 'CartView',
  components: {
    Cart,
  },
  computed: {
    cart() {
      // FIX warning computed proprety has no setter
      return this.$store.getters.getCart;
    },
  },
  methods: {
    setCart() {
      this.$store.dispatch('setCart', this.$store.getters.getCart);
    },
  },
};
</script>

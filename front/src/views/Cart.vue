<template>
  <div>
    <Cart @input="setCart" v-model="cart"/>
  </div>
</template>

<script>
import axios from 'axios';
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
  async created() {
    if (localStorage.cart) {
      this.$store.dispatch('setCart', JSON.parse(localStorage.cart));
    } else {
      const response = await axios.get('http://localhost:3000/cart');
      if (response.status === 200) {
        this.$store.dispatch('setCart', response.data);
      } else {
        // TODO : handle error
      }
    }
  },
};
</script>

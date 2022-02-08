<template>
  <div>
    <Cart v-model="$store.getters.getCart"/>
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
  async created() {
    const response = await axios.get('http://localhost:3000/cart');
    if (response.status === 200) {
      this.$store.dispatch('setCart', response.data);
    } else {
      // TODO : handle error
    }
  },
};
</script>

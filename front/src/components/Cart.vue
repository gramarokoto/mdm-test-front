<template>
  <div class="cart">
    <h1>Mon Panier</h1>
    <div v-for="product in value" :key="product.reference">
      <Product @input="$emit('input')" :value="product" />
    </div>
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'Cart',
  props: {
    value: {
      type: Object,
    },
  },
  components: { Product },
};
</script>

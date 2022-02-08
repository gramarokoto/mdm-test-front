<template>
  <div class="cart">
    <h1>Mon Panier</h1>
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    value: {
      type: Object,
    },
  },
};
</script>

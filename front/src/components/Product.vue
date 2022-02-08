<template>
  <div class="product">
    <h3>{{ value.name }} (ref. {{ value.reference }}) - {{ value.price.base.formatted }}</h3>
    <div v-for="image in value.images" :key="image.small">
      <img :src="image.small" :alt="value.name">
    </div>
    <div>
      Qty :
      <button @click="decrement">-</button>
      {{ value.qty }}
      <button @click="increment">+</button>
    </div>
    <p>TOTAL : {{ value.price.base.amount * value.qty }} €</p>
    <button @click="removeProduct(value.reference)">Supprimer</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    value: {
      type: Object,
    },
  },
  methods: {
    decrement() {
      if (this.value.qty <= 0) return;
      this.value.qty -= 1;
      this.$emit('input');
    },
    increment() {
      this.value.qty += 1;
      this.$emit('input');
    },
    removeProduct(ketToDelete) {
      this.$store.dispatch('removeProduct', ketToDelete);
    },
  },
};
</script>

<style>
.product {
  border: 1px solid black;
  margin: 10px 0;
  padding: 10px 0;
}

</style>

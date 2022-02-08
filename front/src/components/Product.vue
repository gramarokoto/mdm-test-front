<template>
  <div class="product">
    <h3>{{ value.name }} (ref. {{ value.reference }}) - {{ value.price.base.formatted }}</h3>
    <div v-for="image in value.images" :key="image.small">
      <img :src="image.small" :alt="value.name">
    </div>
    <div>
      Qty :
      <v-btn @click="decrement" small>-</v-btn>
      {{ value.qty }}
      <v-btn @click="increment" small>+</v-btn>
    </div>
    <p>TOTAL : {{ value.price.base.amount * value.qty }} €</p>
    <v-dialog
      v-model="removeDialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Supprimer
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Supprimer cet article ?
        </v-card-title>
        <v-card-text><h3>{{ value.name }}</h3></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="removeDialog = false"
          >
            Annuler
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="removeProduct(value.reference)"
          >
            Confimer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  data() {
    return {
      removeDialog: false,
    };
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
      this.removeDialog = false;
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

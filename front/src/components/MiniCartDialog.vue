<template>
  <div>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-badge
          :content="$store.getters.getCartTotalQty"
          color="red"
          overlap
        >
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            small
          >
            <v-icon>mdi-cart-minus</v-icon>
          </v-btn>
        </v-badge>
      </template>
      <v-card>
        <Cart />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Cart from '../views/Cart.vue';

export default {
  name: 'MiniCartDialog',
  components: { Cart },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

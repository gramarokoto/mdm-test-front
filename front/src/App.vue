<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Panier</router-link> |
      <mini-cart-dialog />
    </div>
    <router-view/>
  </v-app>
</template>

<script>
import MiniCartDialog from './components/MiniCartDialog.vue';

export default {
  components: { MiniCartDialog },
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

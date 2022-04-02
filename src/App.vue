<template>
  <NavBar v-show="isAuth" />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  data() {
    return {
      isAuth: false,
    };
  },
  components: {
    NavBar,
  },
  created() {},
  mounted() {
    //console.log("process.env.NODE_ENV ", process.env.NODE_ENV);
    //console.log("process.env.BASE_URL ", process.env.BASE_URL);
    this.isAuth = sessionStorage.getItem("user") !== null ? true : false;
  },
  computed: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

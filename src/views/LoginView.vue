<template>
  <div class="login">
    <h1>Login</h1>
    <label>Nome</label><input type="text" v-model="usuLogado" />
    <button @click="efetuaLogin">Logar</button>
  </div>
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
      usuLogado: "",
    };
  },
  mounted() {
    //alert("login");
  },
  methods: {
    efetuaLogin() {
      sessionStorage.setItem("user", "" + this.usuLogado);
      this.$root.isAuth = true;
      this.$router.push("/");
      //window.history.go("/about");
    },
  },
};
</script>

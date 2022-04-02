<template>
  <div>
    <h1>Logado: {{ usuLogado }}</h1>
    <button @click="desloga">Sair</button>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$router);
  },
  methods: {
    desloga() {
      sessionStorage.removeItem("user");
      this.$router.go("/");
    },
  },
  computed: {
    usuLogado() {
      return sessionStorage.getItem("user");
    },
  },
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <usu-logado></usu-logado>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import UsuLogado from '@/components/UsuLogado.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld,
    UsuLogado
  }
}
</script>

    UsuLogado
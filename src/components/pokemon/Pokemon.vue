<template>
  <div> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 'nada'
    }
  },
  watch: {
    '$route' (to, from) {
      this.name = to.params.pkmn_name
    }
  },
  created () {
    console.log('Estoy en pokemon.vue')
  }
}
</script>

<style>  

</style>
<template>
  <div>
   <md-list>
      <md-list-item v-for="pkmn in pokemons">
      <router-link :to="'pokemon/' + pkmn.name"><md-icon>send</md-icon> <span>{{ pkmn.name }}</span></router-link> 
    </md-list-item>
    </md-list>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      pokemons: [],
      resource: {}
    }
  },
  methods: {
    fetchData () {
      this.$http.get('pokemon?limit=150')
      .then(response => { return response.json() })
      .then(data => {
        this.pokemons = data.results
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>

</style>

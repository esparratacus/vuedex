<template>
  <div> 
<md-card>
  <md-card-header>
    <md-card-header-text>
      <div class="md-title">{{this.pkmn_name}}</div>
      <div class="md-subhead">Subtitle here</div>
    </md-card-header-text>

    <md-card-media>
      <img :src="pokemon_data.sprites.front_default" alt="People">
    </md-card-media>
  </md-card-header>

  <md-card-actions>
    <md-button>Action</md-button>
    <md-button>Action</md-button>
  </md-card-actions>
</md-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pkmn_name: this.$route.params.pkmn_name,
      pokemon_data: {}
    }
  },
  watch: {
    '$route' (to, from) {
      this.name = to.params.pkmn_name
    }
  },
  methods: {
    fetchPokemonData (pkmnName) {
      this.$http.get('pokemon/' + pkmnName)
      .then(response => { return response.json() })
      .then(data => {
        this.pokemon_data = data.results
        console.log(this.pokemon_data)
      })
    }
  },
  created () {
    this.fetchPokemonData(this.pkmn_name)
  }
}
</script>

<style>  
</style>
<template>
  <div> 
<md-card>
  <md-card-header>
    <md-card-header-text>
      <div class="md-title">{{this.pkmn_name}}</div>
      <div class="md-subhead">
        <div v-for="type in pokemon_types" :class="['pkm-type', type.type.name]"><span>{{type.type.name}}</span></div>
      </div>
    </md-card-header-text>

    <md-card-media>
      <img :src="pokemon_sprite" alt="People">
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
      pokemon_sprite: '',
      pokemon_types: []
    }
  },
  watch: {
    '$route' (to, from) {
      this.pokemon_data = this.fetchPokemonData(this.name)
    }
  },
  methods: {
    fetchPokemonData (pkmnName) {
      this.$http.get('pokemon/' + pkmnName)
      .then(response => { return response.json() })
      .then(data => {
        this.pokemon_sprite = data.sprites.front_default
        this.pokemon_types = data.types
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
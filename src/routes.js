import PokemonIndex from './components/pokemon/PokemonIndex.vue'
import Pokemon from './components/pokemon/Pokemon.vue'
import PokemonGeneral from './components/pokemon/PokemonGeneral.vue'
import MainMenu from './components/Header.vue'

export const routes = [
  {path: '', component: MainMenu},
  {path: '/pokemon',
    components: {default: Pokemon, 'main-menu': MainMenu},
    children: [
    {path: '', component: PokemonIndex},
    {path: ':pkmn_name', component: PokemonGeneral}
    ]}
]

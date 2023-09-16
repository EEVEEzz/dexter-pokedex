import axios from 'axios'

const POKE_URL = 'https://pokeapi.co/api/v2'
const ALL_POKE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0'
const SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species'

const pokedex = axios.create({
  baseURL: POKE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// SINGLE POKEMON
export const fetchPokemon = async (id) => {
  const response = await pokedex.get(`/pokemon/${id}`)
  // console.log("POKEMON DATA: ", response.data)
  const { name, base_experience, height, order, weight } = response.data

  let type2, ability1, ability2

  if (!response.data.types[1]) {
    type2 = null
  } else {
    type2 = response.data.types[1].type.name
  }

  if (response.data.abilities[0]) {
    ability1 = response.data.abilities[0].ability.name
    if (response.data.abilities[1]) {
      ability2 = response.data.abilities[1].ability.name
    } else {
      ability2 = null
    }
  } else {
    ability1 = null
  }

  const type1 = response.data.types[0].type.name

  const { stats } = response.data
  const hp = stats[0].base_stat
  const attack = stats[1].base_stat
  const defense = stats[2].base_stat
  const sp_attack = stats[3].base_stat
  const sp_defense = stats[4].base_stat
  const speed = stats[5].base_stat

  const pokeID = response.data.id
  const { sprites } = response.data
  const { moves } = await response.data

  const front_default = sprites.front_default
  const back_default = sprites.back_default
  const front_shiny = sprites.front_shiny
  const back_shiny = sprites.back_shiny

  const front_female = sprites.front_female
  const back_female = sprites.back_female
  const front_shiny_female = sprites.front_shiny
  const back_shiny_female = sprites.back_shiny_female

  // console.log(pokeID)

  // console.log(response.data)

  return {
    name,
    base_experience,
    height,
    order,
    weight,
    type1,
    type2,
    ability1,
    ability2,
    stats,
    hp,
    attack,
    defense,
    sp_attack,
    sp_defense,
    speed,
    back_default,
    front_default,
    back_shiny,
    front_shiny,
    moves,
    pokeID
  }

  // return await response.data
}

// ALL POKEMON
export const fetchAllPokemon = async () => {
  const response = await pokedex.get(`${ALL_POKE_URL}/pokemon/`)
  return await response.data.results
}

//fetch species
export const fetchSpecies = async (id) => {
  const response = await pokedex.get(`${SPECIES_URL}/${id}`)
  // console.log("SPECIES DATA: ", id, response.data)

  const gen_name = response.data.generation.name
  let habitat

  if (response.data.habitat) {
    habitat = response.data.habitat.name
  } else {
    habitat = 'unknown'
  }

  const text = response.data.flavor_text_entries[0].flavor_text

  console.log(gen_name)

  const {
    base_happiness,
    capture_rate,
    evolves_from_species,
    flavor_text_entries,
    generation,
    has_gender_differences,
    is_baby,
    is_legendary,
    is_mythical
  } = await response.data

  return {
    base_happiness,
    capture_rate,
    evolves_from_species,
    generation,
    habitat,
    has_gender_differences,
    is_baby,
    is_legendary,
    is_mythical,
    text,
    gen_name
  }
}

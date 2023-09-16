import axios from 'axios'
const VITE_ABILITY_URL = 'https://pokeapi.co/api/v2/ability'

const ability = axios.create({
  baseURL: VITE_ABILITY_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getAbility = async (id) => {
  const response = await ability.get(`${VITE_ABILITY_URL}/${id}`)
  console.log('ABILITY ACTIONS:', '`' + id + '`', 'GET', `${VITE_ABILITY_URL}/${id}`)

  const name = await response.data.name
  // const ability_name = await response.data.name
  const text = await response.data.flavor_text_entries[0].flavor_text
  const generation = await response.data.generation.name
  const data = await response.data
  let effect

  if ((await response.data.effect_entries[0].language.name) === 'en') {
    effect = await response.data.effect_entries[0].effect
  } else if ((await response.data.effect_entries[1].language.name) === 'en') {
    effect = await response.data.effect_entries[1].effect
  }

  return { name, generation, text, effect, id, data }
}

import axios from 'axios'

const VITE_MOVE_URL = 'https://pokeapi.co/api/v2/move'

const moves = axios.create({
  baseURL: VITE_MOVE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
let url, flavor_text

export const getMove = async (id) => {
  const response = await moves.get(`${VITE_MOVE_URL}/${id}`)
  // console.log("MOVES DATA: ", response.data)

  const {
    meta,
    type,
    accuracy,
    name,
    pp,
    effect_entries,
    effect_chance,
    effect_changes,
    flavor_text_entries,
    generation,
    power,
    damage_class,
    contest_combos,
    contest_type,
    contest_effect,
    machines,
    target
  } = response.data

  const { ailment, category, crit_rate, drain, flinch_chance, healing } = meta

  const contest_effect_url = contest_effect

  for (let i = 0; i < flavor_text_entries.length; i++) {
    if (flavor_text_entries[i].language.name === 'en') {
      // console.log(flavor_text_entries[i].language ,' is english')
      flavor_text = flavor_text_entries[i].flavor_text
    }
  }

  // console.log(response.data)

  return {
    type,
    accuracy,
    ailment,
    category,
    crit_rate,
    drain,
    flinch_chance,
    healing,
    name,
    pp,
    power,
    flavor_text,
    generation,
    damage_class,
    contest_effect_url,
    contest_combos,
    contest_type,
    effect_entries,
    effect_chance,
    effect_changes,
    flavor_text_entries,
    machines,
    target
  }
}

import React, { useContext } from 'react'
import PokemonItem from './PokemonItem'
import SinglePokemon from './SinglePokemon'
import Spinner from '../layout/Spinner'
import PokemonContext from '../../context/pokemon/PokemonContext'

const SearchResult = () => {
  console.warn('SearchResult Component Rendered')
  const { pokemon, pokemany, loading } = useContext(PokemonContext)



  const { pokeID } = pokemon

  if (loading) {
    return (
      <div className="flex justify-center mb-10">
        <SinglePokemon pokeID={pokeID} pokemon={pokemon} />
      </div>
    )
  }
}

export default SearchResult

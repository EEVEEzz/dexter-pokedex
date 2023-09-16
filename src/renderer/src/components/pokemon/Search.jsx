import React, { useContext, useState } from 'react'
import PokemonContext from '../../context/pokemon/PokemonContext'
import AlertContext from '../../context/alert/AlertContext'
import { fetchPokemon, fetchAllPokemon } from '../../context/pokemon/PokemonActions'

const Search = () => {
  console.warn('Search Component Rendered')
  const [text, setText] = useState('')
  const { setAlert } = useContext(AlertContext)
  const { pokemon, pokemany, dispatch } = useContext(PokemonContext)

  // handle input text
  function handleChange(e) {
    let txt = e.target.value
    setText(txt.toLowerCase())
  }

  // handle input submit
  async function handleSubmit(e) {
    e.preventDefault()

    // handle input validation
    if (text === '') {
      setAlert('Please enter a Pokemon Name or Number', 'error')
      setText('')
    } else if (pokemany.length > 0) {
      setAlert('Please clear all to view search result', 'info')
      const one_data = await fetchPokemon(text)
      dispatch({ type: 'GET_POKEMON', payload: one_data })
    } else {
      const one_data = await fetchPokemon(text)
      dispatch({ type: 'GET_POKEMON', payload: one_data })
      setText('')
    }
  }

  // handle show all pokemon
  async function showAll() {
    const all_data = await fetchAllPokemon()
    dispatch({ type: 'GET_ALL_POKEMON', payload: all_data })
    console.log(all_data)
  }

  return (
    <div className="grid grid-cols-1 mb-8 gap-8">
      <div className="lg:flex gap-2 mx-auto">
        <form onSubmit={handleSubmit} className="form-control">
          <div className="join">
            <input
              placeholder="Pokemon Name or Index"
              value={text}
              className="input input-bordered join-item"
              onChange={handleChange}
            />
            <button className="btn join-item rounded-r-full">Search</button>
          </div>
        </form>
      </div>
      <div className='mx-auto'>
      <p className="text-xs">Search for any Pokemon by <span className='badge badge-sm badge-neutral badge-ou'>NAME or INDEX</span> up to index number 1010</p>
      <p className='text-xs'>Example: <span className='badge badge-sm badge-neutral badge-ou'>Eevee or 133</span></p>
      </div>
      
      {Object.keys(pokemon).length > 3 && (
        <>
          <div className="flex mt-3 justify-center">
            <button
              onClick={() => dispatch({ type: 'CLEAR_SINGLE_POKEMON' })}
              className="rounded-lg w-36 btn btn-sm"
            >
              clear Search
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Search

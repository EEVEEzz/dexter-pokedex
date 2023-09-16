import React, { useContext, useEffect, useState, useCallback } from 'react'
import PokemonContext from '../context/pokemon/PokemonContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useFetch from '../hooks/useFetch'
import useLocalStorage from '../hooks/useLocalStorage'
import Meta from '../components/layout/Meta'

const AbilityPage = () => {
  let url

  url = location.hash
    .replace(`#/ability/`, '')
    // .replace("http://", "");
    .replace('https://', '')

  const { pokemon } = useContext(PokemonContext)
  const data = useFetch(`https://pokeapi.co/api/v2/ability/${url}`, {})
  const [ability, setAbility] = useLocalStorage('ability', {})
  const [mem, setMem] = useState()

  let value = JSON.parse(localStorage.getItem('ability'))

  const onClick = useCallback(() => {
    setMem()
  }, [setMem])

  useEffect(() => {
    if (value.name === 'a temporary ability') {
      func(url).then((val) => {
        setAbility(val)
      })
    }

    async function func(url) {
      // console.log(url);
      const response = await axios.get(`https://pokeapi.co/api/v2/ability/${url}`)
      // console.log("response.data", response.data);
      return response.data
    }

    // console.log("STORED VALUE:", value);
  }, [pokemon.pokeID])

  let paddedIndex = pokemon.pokeID
  if (paddedIndex < 10) {
    paddedIndex = '00' + paddedIndex
  }

  if (paddedIndex > 9 && paddedIndex < 100) {
    paddedIndex = '0' + paddedIndex
  }

  if (paddedIndex > 1010) {
    paddedIndex = paddedIndex
  }

  return (
    <>
    <Meta title={`Ability - ${value.name.toUpperCase()}`} />
      <div className="w-full mx-auto lg:w-10/12">
        <div className="flex justify-between mb-4">
          <Link to="/" className="btn btn-outline btn-error btn-sm">
            Back to search
          </Link>
        </div>
        <div>
          {pokemon.name && (
            <>
              <div className="custom-card-image mb-6 md:mb-0">
                <div className="rounded-lg shadow-xl card image-full">
                  <figure>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`}
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <div className="absolute left-5 bottom-4 card-title mb-0 text-xl opacity-60 ">
                      <p className="capitalize">{pokemon.name}</p> uses
                      <p className="capitalize">{value.name}!</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-col ">
            <div className="mb-6">
              <h1 className="flex flex-col lg:flex-row md:flex-row gap-2 text-5xl lg:text-6xl capitalize ">
                {value.name}
                {value.generation && (
                  <div className="flex items-center">
                    <div className="mr-1 p-1 uppercase badge badge-lg  badge-info">
                      {value.generation.name}
                    </div>
                  </div>
                )}
              </h1>
            </div>

            <div className="">
              <div>
                <div className="bg-neutral rounded  mb-1 shadow-mg">
                  <div className="stat-title  bg-base-200 rounded-t  p-2 text-lg font-bold">
                    Ability Description
                  </div>
                  {value.flavor_text_entries && (
                    <div className="stat-value  whitespace-pre-wrap text-4xl lg:text-6xl md:text-5xl text-neutral-content p-2">
                      {value.flavor_text_entries[0].language.name !== 'en' ? (
                        <>{value.flavor_text_entries[2].flavor_text}</>
                      ) : (
                        <>{value.flavor_text_entries[0].flavor_text}</>
                      )}
                    </div>
                  )}
                </div>
                <div className="bg-neutral rounded mt-5 mb-1 shadow-mg">
                  <div className="stat-title bg-base-200 rounded-t  p-2 text-lg font-bold">
                    Ability Effect
                  </div>
                  {value.effect_entries && (
                    <div className="text-lg whitespace-pre-wrap text-neutral-content p-3 ">
                      {value.effect_entries[0].language.name !== 'en' ? (
                        <>{value.effect_entries[1].effect}</>
                      ) : (
                        <>{value.effect_entries[0].effect}</>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral rounded mt-5">
            <div className="stat-title bg-base-200 rounded-t  p-2 text-lg font-bold">
              Other Pokemon with this ability
            </div>

            <Component value={value} onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  )
}

const Component = React.memo(({ onClick, value }) => {
  // console.log("pokemon buttons rendered");
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 gap-2 mb-10 p-2">
        {value.pokemon &&
          value.pokemon.map((item) => (
            <Link key={item.pokemon.name} onClick={onClick} to={`/pokemon/${item.pokemon.name}`}>
              <div className="capitalize font-bold btn btn-xs btn-warning btn-outline">
                {item.pokemon.name}
              </div>
            </Link>
          ))}
      </div>
    </>
  )
})

export default AbilityPage

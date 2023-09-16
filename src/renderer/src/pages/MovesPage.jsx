import React, { useContext, useEffect, useState } from 'react'
import Spinner from '../components/layout/Spinner'
import BaseStats from '../components/pokemon/BaseStats'
import MovesContext from '../context/moves/MovesContext'
import PokemonContext from '../context/pokemon/PokemonContext'
import { getMove } from '../context/moves/MoveActions'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useLocalStorage from '../hooks/useLocalStorage'
import axios from 'axios'
import Meta from '../components/layout/Meta'

const MovesPage = () => {
  let contest_url = 'https://pokeapi.co/api/v2/contest-effect/1/'

  const { move, dispatch, loading } = useContext(MovesContext)
  const { pokemon } = useContext(PokemonContext)

  const param = useParams()

  const { error, data, complete } = useFetch(`${contest_url}`, {})
  // console.log("Fetch Status:", complete);

  const [contest, setContest] = useLocalStorage('contest', 'contest')

  let value = JSON.parse(localStorage.getItem('contest'))

  useEffect(() => {
    const getMoveData = async () => {
      try {
        dispatch({ type: 'SET_LOADING' })
        const move_Data = await getMove(param.id)
        dispatch({ type: 'GET_MOVE', payload: move_Data })
      } catch (error) {
        location.href = '/notfound'
        // Handle any errors that occur during the data retrieval process
        // console.error("Error fetching move data:", error);
      }
    }

    if (move && move.contest_effect_url) {
      contest_url = move.contest_effect_url
      // console.log("contest_url", contest_url);
    } else {
      contest_url = 'https://pokeapi.co/api/v2/contest-effect/14/'
    }

    if (value.id === 14) {
      func(contest_url).then((val) => {
        setContest(val)
      })
    }

    // console.log("value", value);

    async function func(url) {
      // console.log(url);
      const response = await axios.get(`${url}`)
      // console.log("response.data", response.data);
      return response.data
    }

    getMoveData()
  }, [dispatch, param.id])

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

  if (!loading) {
    return (
      <>
        <Spinner />
      </>
    )
  } else {
    return (
      <>
        <Meta title={`Move - ${move?.name?.toUpperCase()}`} />
        <div className="w-full mx-auto lg:w-10/12">
          <div className="flex justify-between mb-4">
            <Link to="/" className="btn btn-outline btn-sm">
              Back to search
            </Link>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            {pokemon.name && (
              <>
                <div className="mb-6 md:mb-0">
                  <div className="card image-full">
                    <figure>
                      <img
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`}
                        alt=""
                      />
                    </figure>

                    <div className="card-body">
                      <p className="absolute left-5 bottom-4 card-title mb-0 text-xl opacity-60 ">
                        <p className="capitalize">{move.type.name && move.name}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="col-span-3 ">
              <div className=" mb-6">
                <h1 className="text-5xl flex flex-col  lg:text-6xl capitalize card-title">
                  {move.type.name && move.name}
                  <div className="lg:flex items-center">
                    <div className="lg:ml-10  right-3 lg:relative mr-1 badge badge-lg badge-primary">
                      {move.type.name && move.type.name}
                    </div>
                    <div className="lg:ml-2 lg:relative mr-1 capitalize badge  badge-lg  badge-info">
                      {move.generation && move.generation.name}
                    </div>
                  </div>
                </h1>
              </div>

              <div className="grid grid-cols-2 py-2 rounded">
                <div className="">
                  <div className=" pr-5 text-xl xl:text-lg md:text-lg lg:text-lg">
                    <div>
                      <div className=" ml-2 mr-1 capitalize ">
                        <p className="stat-title text-neutral-content ">Target</p>
                        <p className="text-accent stat-value text-xl lg:text-4xl">
                          {move.target && <>{move.target.name}</>}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-10">
                  <div className=" pr-5 text-xl xl:text-lg md:text-lg lg:text-lg">
                    <div>
                      <div className=" ml-2 mr-1 capitalize ">
                        <p className="stat-title text-neutral-content ">PP</p>
                        <p className="pl-4 text-accent stat-value text-4xl lg:text-4xl">
                          {move.pp}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className=" pr-5 text-xl xl:text-lg md:text-lg lg:text-lg">
                    <div>
                      <div className="mb-2 ml-2 mr-1 capitalize ">
                        <p className="stat-title text-neutral-content ">Power</p>
                        <p className="pl-4 text-accent stat-value text-4xl lg:text-4xl">
                          {move.power && move.power}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-10">
                  <div className=" pr-5 text-xl xl:text-lg md:text-lg lg:text-lg">
                    <div>
                      <div className=" ml-2 mr-1 capitalize ">
                        <p className="stat-title text-neutral-content ">Accuracy</p>
                        <p className="pl-4 text-accent stat-value text-4xl lg:text-4xl">
                          {move.accuracy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div>
                  <div className="bg-neutral rounded mb-1 pb-3 shadow-mg">
                    <div className="stat-title bg-base-200 rounded-t p-1 text-lg ">
                      Move Description
                    </div>
                    {move.flavor_text_entries && (
                      <div className="stat-value  whitespace-pre-wrap text-4xl lg:text-6xl md:text-5xl text-neutral-content p-3">
                        {move.flavor_text}
                      </div>
                    )}
                  </div>
                  <div className="bg-neutral rounded mt-5 mb-1 shadow-mg">
                    <div className="stat-title bg-base-200 rounded-t  p-1 text-lg ">
                      Move Effect
                    </div>
                    {move.effect_entries && (
                      <div className="text-lg whitespace-pre-wrap text-neutral-content p-3 ">
                        {move.effect_entries[0].language.name !== 'en' ? (
                          <>{move.effect_entries[1].effect}</>
                        ) : (
                          <>{move.effect_entries[0].effect}</>
                        )}
                      </div>
                    )}
                  </div>
                  <div className=" rounded mt-5 shadow-mg">
                    <div className="stat-title bg-base-200 rounded-t p-1 text-lg ">
                      Ailment Side-Effect
                    </div>

                    <div className="grid grid-cols-3 bg-neutral gap-5 py-2 rounded">
                      <div className=" pr-5 text-xl">
                        <div>
                          <div className=" ml-2 mr-1 capitalize ">
                            <p className="stat-title text-neutral-content ">Ailment</p>
                            <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                              {move.ailment && move.ailment.name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-10">
                        <div className=" pr-5 text-xl">
                          <div>
                            <div className=" ml-2 mr-1 capitalize ">
                              <p className="stat-title text-neutral-content ">Damage Class</p>
                              <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                                {move.damage_class && move.damage_class.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <div className="pb-3 pr-5 text-xl">
                          <div>
                            <div className=" ml-2 mr-1 capitalize ">
                              <p className="stat-title  text-neutral-content ">Category</p>
                              <p className="pl-4 text-accent stat-value text-3xl md:text-5xl lg:text-6xl">
                                {move.category && move.category.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 stat-title bg-base-200 rounded-t p-1 text-lg ">
                      Ailment Stats
                    </div>
                    <div className="grid grid-cols-4 py-5 mb-6 bg-neutral rounded">
                      <div className="">
                        <div className=" pr-5 text-xl xl:text-lg md:text-lg lg:text-lg">
                          <div>
                            <div className="mb-2 ml-2 mr-1 capitalize ">
                              <p className="stat-title text-neutral-content ">Healing</p>
                              <p className="pl-4 text-accent stat-value text-5xl lg:text-6xl">
                                {move.healing && move.healing}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className=" pr-5 text-xl xl:text-lg md:text-lg lg:text-lg">
                          <div>
                            <div className="mb-2 ml-2 mr-1 capitalize ">
                              <p className="stat-title text-neutral-content ">Crit.</p>
                              <p className="pl-4 text-accent stat-value text-5xl lg:text-6xl">
                                {move.crit_rate && move.crit_rate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className=" pr-5 text-xl xl:text-lg md:text-lg lg:text-lg">
                          <div>
                            <div className="mb-2 ml-2 mr-1 capitalize ">
                              <p className="stat-title text-neutral-content ">Drain</p>
                              <p className="pl-4 text-accent stat-value text-5xl lg:text-6xl">
                                {move.drain && move.drain}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className=" pr-5 text-xl xl:text-lg md:text-lg lg:text-lg">
                          <div>
                            <div className="mb-2 ml-2 mr-1 capitalize ">
                              <p className="stat-title text-neutral-content ">Flinch</p>
                              <p className="pl-4 text-accent stat-value text-5xl lg:text-6xl">
                                {move.flinch_chance && move.flinch_chance}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row md:flex-row justify-between xl:flex-row">
                <div className="bg-base-200 rounded mt-5 stat">
                  <div className="stat-title  rounded-t text-lg ">
                    Contest Information
                    <hr />
                  </div>
                  <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
                    <div>
                      {data && (
                        <>
                          <div className="mt-2">
                            <div className="stat-title text-accent font-bold">Effect</div>
                            {data.effect_entries[0].effect}
                          </div>

                          <div>
                            <div className="stat-title pt-2 text-accent font-bold">
                              Effectivness
                            </div>
                            {data.flavor_text_entries[0].flavor_text}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-base-200 rounded mt-5 stat">
                  <div className="stat-title  rounded-t text-lg pb-2">
                    This move in a Contest
                    <hr />
                  </div>

                  <div className="flex justify-between">
                    <div className="bg-base-200">
                      <div className="">
                        {move.contest_type && (
                          <>
                            <div className="stat-title text-accent font-bold">Appeal Type</div>

                            <div className="capitalize stat-value pb-2">
                              {move.contest_type.name}
                            </div>
                          </>
                        )}
                      </div>

                      {/* CONTEST COMBOS */}
                      {move.contest_combos ? (
                        <div>
                          {move.contest_combos.normal.use_after && (
                            <>
                              <div className="stat-title text-accent pt-2 font-bold">
                                Use After These Moves
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                {move.contest_combos.normal.use_after.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={`/move/${item.name}`}
                                    className="btn btn-outline btn-xs"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}

                          {move.contest_combos.normal.use_before && (
                            <>
                              <div className="stat-title text-accent pt-2 font-bold">
                                Use Before These Moves
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {move.contest_combos.normal.use_before.map((item) => (
                                  <Link
                                    className="btn btn-xs btn-outline"
                                    to={`/move/${item.name}`}
                                    key={item.name}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}

                          {move.contest_combos.super.use_after && (
                            <>
                              <div className="stat-title text-accent pt-2 font-bold">
                                Use After These Moves
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {move.contest_combos.super.use_after.map((item) => (
                                  <Link
                                    className="btn btn-xs btn-outline"
                                    to={`/move/${item.name}`}
                                    key={item.name}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}

                          {move.contest_combos.super.use_before && (
                            <>
                              <div className="stat-title text-accent pt-2 font-bold">
                                Use Before These Moves
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {move.contest_combos.super.use_before.map((item) => (
                                  <Link
                                    className="btn btn-xs btn-outline"
                                    to={`/move/${item.name}`}
                                    key={item.name}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <div className="stat-title text-accent pt-2 font-bold">
                          No Contest Combos
                        </div>
                      )}
                    </div>

                    <div>
                      {move.contest_effect_url && (
                        <>
                          <div className="stat-title text-accent font-bold">Appeal</div>
                          <div className="stat-value pb-2">{data && data.appeal}</div>
                          <div className="stat-title text-accent font-bold">Jam</div>
                          <div className="stat-value">{data && data.jam}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MovesPage

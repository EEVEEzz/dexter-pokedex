import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/layout/Meta'

const AboutPage = () => {
  return (
    <div>
      <Meta title={`About`} />
      <h1 className="text-6xl mb-4">About This Pokedex...</h1>

      <div className="mb-10">
        <p>Copyright (c) 2023 Ivan Kotze</p>
        <p className="text-xs">Released under the MIT license</p>
      </div>

      <div className="mb-10 text-xs">
        <p>
          High Resolution Images are provided by{' '}
          <a
            href="https://assets.pokemon.com"
            target="_blank"
            className="text-info-content underline font-bold "
          >
            https://assets.pokemon.com
          </a>
        </p>
        <p className="text-xs">
          Pokemon data provided by PokeAPI - {' '}
          <a
            href="https://pokeapi.co"
            target="_blank"
            className="text-info-content underline font-bold"
          >
            https://pokeapi.co
          </a>
        </p>
      </div>

      <div className="mb-10">
        <Link to="/" className="btn btn-outline btn-sm">
          back to home
        </Link>
      </div>

      <p className=" mb-3 badge badge-outline badge-lg text-info">Version: 1.2.2</p>
    </div>
  )
}

export default AboutPage

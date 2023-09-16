import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SinglePokemon = ({ pokemon, pokeID }) => {
  console.warn("SinglePokemon Component Rendered")
  let paddedIndex = pokeID;

  if (paddedIndex < 10) {
    paddedIndex = "00" + paddedIndex;
  }

  if (paddedIndex > 9 && paddedIndex < 100) {
    paddedIndex = "0" + paddedIndex;
  }

  if (paddedIndex > 1010) {
    paddedIndex = "paddedIndex";
  }

  return (
    <div className="card compact shadow-md bg-neutral">
      <div className="space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded w-80">
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-center text-neutral-content justify-between">
          <div className="mb-5">
            <h2 className="card-title text-4xl capitalize">{pokemon.name}</h2>
            <p className="text-3xl opacity-60"># {paddedIndex}</p>
          </div>
          <div className="pr-5">
            <Link
              to={`/pokemon/${pokemon.name}`}
              className="text-neutral-content btn btn-outline btn-sm"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePokemon.defaultProps = {
  pokemon: {},
};

SinglePokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default SinglePokemon;

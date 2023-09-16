import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PokemonItem = ({ pokemon: { name, url } }) => {
  console.warn("PokemonItem Component Rendered")

  let id = url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");
  let paddedIndex = id;

  if (paddedIndex < 10) {
    paddedIndex = "00" + paddedIndex;
  }

  if (paddedIndex > 9 && paddedIndex < 100) {
    paddedIndex = "0" + paddedIndex;
  }

  if (paddedIndex > 1010) {
    paddedIndex = "paddedIndex";
  }

  // console.log("Padded index:", paddedIndex);

  return (
    <div className="card shadow-md compact side bg-neutral">
      <div className="flex-row justify-between item-center card-body">
        <div>
          <div className="avatar">
            <div className="w-24 h-24">
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex mx-auto flex-row lg:flex-col xl:flex-col md:flex-col items-center gap-6 lg:gap-3 xl:gap-3 md:gap-3">
          <div>
            <h2 className="card-title text-neutral-content capitalize">
              {name}
            </h2>
            <p className="text-neutral-content text-lg opacity-40">
              # {paddedIndex}
            </p>
          </div>
          <div>
            {paddedIndex < 100 && paddedIndex > 9  && (
              <>
                <Link
                  to={`/pokemon/${name}`}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  View
                </Link>
              </>
            )}
            {paddedIndex > 0 && paddedIndex < 10  && (
              <>
                <Link
                  to={`/pokemon/${name}`}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  View
                </Link>
              </>
            )}
            {paddedIndex > 99 && (
              <>
                <Link
                  to={`/pokemon/${name}`}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  View
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PokemonItem.defaultProps = {
  pokemon: [],
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonItem;

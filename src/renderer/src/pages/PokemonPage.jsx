import React, { useRef } from "react";
import { useEffect, useContext, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PokemonContext from "../context/pokemon/PokemonContext";
import { fetchPokemon, fetchSpecies } from "../context/pokemon/PokemonActions";
import Spinner from "../components/layout/Spinner";
import Species from "../components/pokemon/Species";
import Sprites from "../components/pokemon/Sprites";
import PokeInfo from "../components/pokemon/PokeInfo";
import Badges from "../components/pokemon/Badges";
import Evolution from "../components/pokemon/Evolution";
import ImageCard from "../components/pokemon/ImageCard";
import MovesList from "../components/pokemon/MovesList";
import BaseStats from "../components/pokemon/BaseStats";
import useLocalStorage from "../hooks/useLocalStorage";
import PokeNav from "../components/pokemon/PokeNav";
import Meta from "../components/layout/Meta";

const PokemonPage = () => {
  const { pokemon, loading, dispatch, species } = useContext(PokemonContext);
  const [ability, setAbility] = useLocalStorage("ability", "");
  const [contest, setContest] = useLocalStorage("contest", "");
  const [mem, setMem] = useState();
  const [showMoves, setShowMoves] = useState(false);

  const memRef = useRef();

  const navigate = useNavigate();
  
  const local = useLocation();

  const pathMathRoute = (route) => {
    try {
      if (route === local.pathname) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = useCallback(() => {
    setAbility("");
    setContest("");
  }, []);

  const {
    name,
    base_experience,
    height,
    weight,
    type1,
    type2,
    ability1,
    ability2,
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
    pokeID,
  } = pokemon;

  const {
    gen_name,
    text,
    base_happiness,
    capture_rate,
    evolves_from_species,
    generation,
    habitat,
    has_gender_differences,
    is_baby,
    is_legendary,
    is_mythical,
    flavor_text,
  } = species;

  const tempAbilityObject = {
    name: "a temporary ability",
    generation: {
      name: "a temporary generation",
    },
    flavor_text_entries: [
      {
        flavor_text: "Heals the body by shedding.",
        language: {
          name: "en",
          url: "https://pokeapi.co/api/v2/language/9/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
    ],
    pokemon: [
      {
        is_hidden: false,
        pokemon: {
          name: "metapod",
          url: "https://pokeapi.co/api/v2/pokemon/11/",
        },
        slot: 1,
      },
    ],
    effect_entries: [
      {
        effect:
          "Pokémon mit dieser Fähigkeit haben am Ende jeder Runde eine 33% Chance von einer bestehenden major status ailment geheilt zu werden.",
        language: {
          name: "de",
          url: "https://pokeapi.co/api/v2/language/6/",
        },
        short_effect:
          "Nach jeder Runde besteht eine 33% Chance von einer bestehenden Statusänderung geheilt zu werden.",
      },
      {
        effect:
          "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
        language: {
          name: "en",
          url: "https://pokeapi.co/api/v2/language/9/",
        },
        short_effect: "Doubles Speed during strong sunlight.",
      },
    ],
    effect_changes: [
      {
        effect_entries: [
          {
            effect: "Die Chance, dass der Effekt eintritt, beträgt 30%.",
            language: {
              name: "de",
              url: "https://pokeapi.co/api/v2/language/6/",
            },
          },
          {
            effect: "Chance of taking effect is 30%.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
    ],
  };

  const tempContestObject = {
    appeal: 2,
    effect_entries: [
      {
        effect:
          "Attempts to jam all Pokémon that have appealed this turn for half their appeal points (minimum 1).",
        language: {
          name: "en",
          url: "https://pokeapi.co/api/v2/language/9/",
        },
      },
    ],
    flavor_text_entries: [
      {
        flavor_text: "Badly startles all Pokémon that made good appeals.",
        language: {
          name: "en",
          url: "https://pokeapi.co/api/v2/language/9/",
        },
      },
    ],
    id: 14,
    jam: 1,
  };
  
  let url


  url = location.hash
    .replace(`#/pokemon/`, '')
    // .replace("http://", "");
    .replace('https://', '')

  const input = url;

  useEffect(() => {
    const getPokemonData = async () => {
      await dispatch({ type: "SET_LOADING" });
      const pokemon_data = await fetchPokemon(input);
      await dispatch({ type: "GET_POKEMON", payload: pokemon_data });
    };

    const getSpeciesData = async () => {
      await dispatch({ type: "SET_LOADING" });
      const species_data = await fetchSpecies(input);
      await dispatch({ type: "GET_SPECIES", payload: species_data });
    };

    setAbility(tempAbilityObject);
    setContest(tempContestObject);
    getPokemonData();
    getSpeciesData();
  }, [dispatch, input]);

  if (!loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  let paddedIndex = pokeID;

  if (paddedIndex < 10) {
    paddedIndex = "00" + paddedIndex;
  }

  if (paddedIndex > 9 && paddedIndex < 100) {
    paddedIndex = "0" + paddedIndex;
  }

  if (paddedIndex > 1010) {
    paddedIndex = paddedIndex;
  }

  return (
    <>
    <Meta title={`Pokemon - ${name.toString().toUpperCase()}`} />
      <div className="w-full mx-auto lg:w-10/12">
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0 ">
            <ImageCard index={pokeID} id={pokemon.id} text={text} />
          </div>

          <div className=" col-span-2">
            <Badges
              name={name}
              generation={gen_name && gen_name}
              type1={type1}
              type2={type2}
            />
            <div className="flex">
              <PokeInfo
                ability1={ability1}
                ability2={ability2}
                is_baby={is_baby}
                is_legendary={is_legendary}
                is_mythic={is_mythical}
                txt={text}
              />
              <Sprites
                back_default={back_default}
                front_default={front_default}
                back_shiny={back_shiny}
                front_shiny={front_shiny}
              />
            </div>

            <div>
              <div>
                <Evolution
                  onClick={onClick}
                  gender_diff={has_gender_differences}
                  evo_from={evolves_from_species && evolves_from_species}
                />
              </div>
              <div className="bg-neutral rounded ">
                <BaseStats
                  hp={hp}
                  attack={attack}
                  defense={defense}
                  sp_attack={sp_attack}
                  sp_defense={sp_defense}
                  speed={speed}
                />
              </div>
              <div className="bg-neutral rounded">
                <Species
                  weight={weight}
                  height={height}
                  base_experience={base_experience}
                  habitat={habitat && habitat}
                  specie={species}
                  pokemon={pokemon}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 whitespace-wrap text-xs">{text}</div>
        </div>

        <div>
          <div>
            <button
              onClick={() => setShowMoves(!showMoves)}
              className="btn btn-sm btn-outline "
            >
              See Moves List for{" "}
              {name && <div className="text-secondary">{name}</div>}
            </button>
          </div>

          <div className="mb-20">
            {showMoves && moves && (
              <>
                <MovesList moves={moves} />
              </>
            )}
          </div>
        </div>
      </div>
      <PokeNav pokeID={pokeID} />
    </>
  );
};

export default PokemonPage;

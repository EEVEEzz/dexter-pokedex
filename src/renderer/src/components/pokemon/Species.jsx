import React, {useContext} from "react";
import PokemonContext from "../../context/pokemon/PokemonContext";


const Species = ({weight, height, base_experience, specie, pokemon, habitat}) => {
  console.warn("Species Component Rendered")

  return (
    <>
      <div>
        <div className="stat-title bg-base-200 rounded-t  stat text-lg font-bold">Species Info</div>

        <div className="grid grid-cols-3 py-5 mb-6 rounded">
          <div className=" pr-5">
            <div>
              <div className="mb-2 ml-2 mr-1  capitalize ">
                <p className="stat-title text-neutral-content font-bold text-xs xl:text-lg md:text-lg lg:text-lg">Habitat</p>
                <p className="pl-4 text-accent stat-value text-sm lg:text-2xl">
                  {habitat}
                </p>
              </div>
            </div>
          </div>
          <div className=" pr-5">
            <div>
              <div className="mb-2 ml-2 mr-1  capitalize ">
                <p className="stat-title text-neutral-content font-bold text-xs xl:text-lg md:text-lg lg:text-lg">Capture Rate</p>
                <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                  {specie.capture_rate}
                </p>
              </div>
            </div>
          </div>
          <div className=" pr-5">
            <div>
              <div className="mb-2 ml-2 mr-1  capitalize ">
                <p className="stat-title text-neutral-content font-bold text-xs xl:text-lg md:text-lg lg:text-lg">Gender Diff. </p>
                <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                {!specie.has_gender_differences ? (<>No</>) : (<>Yes</>)}
                </p>
              </div>
            </div>
          </div>
          <div className=" pr-5">
            <div>
              <div className="mb-2 ml-2 mr-1  capitalize ">
                <p className="stat-title text-neutral-content font-bold text-xs xl:text-lg md:text-lg lg:text-lg">Base Experience</p>
                <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                  {base_experience}
                </p>
              </div>
            </div>
          </div>
          <div className=" pr-5">
            <div>
              <div className="mb-2 ml-2 mr-1  capitalize ">
                <p className="stat-title text-neutral-content font-bold text-xs xl:text-lg md:text-lg lg:text-lg">Weight</p>
                <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                  {weight}
                </p>
              </div>
            </div>
          </div>
          <div className=" pr-5">
            <div>
              <div className="mb-2 ml-2 mr-1  capitalize ">
                <p className="stat-title text-neutral-content font-bold text-xs xl:text-lg md:text-lg lg:text-lg">Height</p>
                <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                  {height}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Species;

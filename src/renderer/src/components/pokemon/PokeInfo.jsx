import React from "react";
import { Link } from "react-router-dom";

const PokeInfo = ({
  is_baby,
  is_legendary,
  is_mythic,
  txt,
  ability1,
  ability2,
}) => {
  console.warn("PokeInfo Component Rendered")
  return (
    <>
      <div className="mb-6 stat-title rounded-lg  bg-base-100">
        {is_baby && (
          <div className="flex gap-5 text-2xl w-full mb-1  rounded-lg  bg-base-100">
            <div className="stat-title bg-base-100 text-info p-1 rounded font-bold text-md">
              Baby Pokemon
            </div>
          </div>
        )}

        {is_legendary && (
          <div className="flex gap-4 text-2xl w-full mb-1 rounded-lg   bg-base-100">
            <div className="stat-title bg-base-100 text-info p-1 rounded font-bold text-md">
              Legendary Pokemon
            </div>
          </div>
        )}

        {is_mythic && (
          <div className="flex gap-4 text-2xl w-full mb-1 rounded-lg   bg-base-100">
            <div className="stat-title bg-base-100 text-info p-1 rounded font-bold text-md">
              Mythic Pokemon
            </div>
          </div>
        )}

        <div className="mt-3">
          <div className="stat-title ">Abilities</div>
          <div className="stat-value text-3xl md:text-4xl">
            <div>
              <div className="capitalize p-2 mb-2 btn  btn-outline btn-sm cursor-pointer ">
                <Link to={`/ability/${ability1}`}>{ability1}</Link>
              </div>
            </div>
            {ability2 !== null && (
              <div>
                <div className="capitalize p-2 mb-2 btn  btn-outline btn-sm cursor-pointer ">
                  <Link to={`/ability/${ability2}`}>{ability2}</Link>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default PokeInfo;

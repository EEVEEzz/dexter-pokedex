import React from "react";

const BaseStats = ({ hp,
  attack,
  defense,
  sp_attack,
  sp_defense,
  speed, }) => {
    console.warn("BaseStats Component Rendered")
  return (
    <>
      <div className="stat-title bg-base-200 rounded-t  stat text-lg font-bold">Base Stats</div>
      <div className="grid grid-cols-3 py-5 mb-6 rounded">
          <div className="">
            <div className=" pr-5 text-xs xl:text-lg md:text-lg lg:text-lg">
              <div>
                <div className="mb-2 ml-2 mr-1 capitalize ">
                  <p className="stat-title text-neutral-content font-bold">HP</p>
                  <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                  {hp}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" pr-5 text-xs xl:text-lg md:text-lg lg:text-lg">
              <div>
                <div className="mb-2 ml-2 mr-1 capitalize ">
                  <p className="stat-title text-neutral-content font-bold">Attack</p>
                  <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                  {attack}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" pr-5 text-xs xl:text-lg md:text-lg lg:text-lg">
              <div>
                <div className="mb-2 ml-2 mr-1 capitalize ">
                  <p className="stat-title text-neutral-content font-bold">Defense</p>
                  <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                    {defense}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" pr-5 text-xs xl:text-lg md:text-lg lg:text-lg">
              <div>
                <div className="mb-2 ml-2 mr-1 capitalize ">
                  <p className="stat-title text-neutral-content font-bold">Sp. Attack</p>
                  <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                    {sp_attack}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" pr-5 text-xs xl:text-lg md:text-lg lg:text-lg">
              <div>
                <div className="mb-2 ml-2 mr-1 capitalize ">
                  <p className="stat-title text-neutral-content font-bold">Sp. Defense</p>
                  <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                    {sp_defense}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" pr-5 text-xs xl:text-lg md:text-lg lg:text-lg">
              <div>
                <div className="mb-2 ml-2 mr-1 capitalize ">
                  <p className="stat-title text-neutral-content font-bold">Speed</p>
                  <p className="pl-4 text-accent stat-value text-lg lg:text-4xl">
                    {speed}
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default BaseStats;

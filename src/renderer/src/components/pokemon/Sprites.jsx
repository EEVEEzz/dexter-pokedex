import React from "react";

const Sprites = ({ back_default,front_default,back_shiny,front_shiny }) => {
  
  console.warn("Sprites Component Rendered")
  
  return (
    <>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-2 lg:gap-2  w-full text-accent capitalize ml-4 lg:ml-10">
        <div>
          <p className=" text-xs text-center"></p>
          <img src={front_default} alt="" />
          {/* {front_female !== null && (
            <>
              <img src={front_female} alt="" />
              <p className=" text-xs text-center">female</p>
            </>
          )} */}
        </div>
        <div>
          <p className=" text-xs text-center "> </p>
          <img src={front_shiny} alt="" />
          {/* {front_shiny_female !== null && (
            <>
              <img src={front_shiny_female} alt="" />
              <p className=" text-xs text-center">(f)</p>
            </>
          )} */}
        </div>
        <div>
          <p className=" text-xs text-center"></p>
          <img src={back_default} alt="" />
          {/* {back_female !== null && (
            <>
              <img src={back_female} alt="" />
              <p className=" text-xs text-center">(f)</p>
            </>
          )} */}
        </div>
        <div>
          <p className=" text-xs text-center"></p>
          <img className="" src={back_shiny} alt="" />
          {/* {back_shiny_female !== null && (
            <>
              <img src={back_shiny_female} alt="" />
              <p className=" text-xs text-center">(f)</p>
            </>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Sprites;

import React from "react";
import spinner from './assets/pokeball.gif'

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <img width={400} src={spinner} alt="" />
    </div>
  );
};

export default Spinner;

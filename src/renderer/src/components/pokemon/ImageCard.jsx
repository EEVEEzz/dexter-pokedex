import React from "react";

const ImageCard = ({index}) => {
  console.warn("ImageCard Component Rendered")
  let paddedIndex = index;

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
      <div className="">
        <div className=" rounded-lg shadow-xl card ">

          <figure>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`}
              alt=""
            />
          </figure>

          <div className="card-body">
            <p className="absolute left-5 bottom-4 card-title mb-0 text-3xl opacity-60 capitalize">
              # {paddedIndex}
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ImageCard;

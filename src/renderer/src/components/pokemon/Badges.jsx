import React from "react";

const Badges = ({ name, generation, type1, type2 }) => {
  console.warn("Badges Component Rendered")
  return (
    <>
      <div className="mb-6 flex items-center justify-around md:justify-normal lg:justify-normal gap-5 p-2 bg-neutral rounded">
        <h1 className="text-3xl text-neutral-content flex capitalize card-title">
          {name}
        </h1>

        <div className="flex flex-col gap-2 uppercase lg:flex-row">
          <div className="flex">
            <div>
              <div className=" badge badge-sm lg:badge-lg card-title badge-primary mr-1 hover:badge-accent cursor-pointer ">
                {type1}
              </div>
            </div>
            {type2 !== null && (
              <div>
                <div className=" badge badge-sm lg:badge-lg card-title badge-primary mr-1 hover:badge-accent cursor-pointer ">
                  {type2}
                </div>
              </div>
            )}
          </div>

          <div className="card-title badge badge-sm lg:badge-lg badge-secondary mr-1 ">
            <div>{generation}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Badges;

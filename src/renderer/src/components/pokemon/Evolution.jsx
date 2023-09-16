import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Evolution = React.memo(({ evo_from, gender_diff, onClick}) => {
  return (
    <div className="flex gap-5 mb-5">
      {evo_from && (
        <div className="">
          <div className="stat-title">Evolves From</div>
          <button className="stat-value capitalize hover:text-accent">
            <Link  onClick={onClick} to={`/pokemon/${evo_from.name}`}>{evo_from.name}</Link>
            </button>
        </div>
      )}
      {gender_diff && (
        <div className="">
          <div className="stat-title">Has Gender Differences</div>
          <div className="stat-value">Yes</div>
        </div>
      )}

    </div>
  );
});

export default Evolution;

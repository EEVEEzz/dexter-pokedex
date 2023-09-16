import React from 'react'
import MoveItem from '../moves/MoveItem'

const MovesList = ({moves}) => {
  console.warn("MovesList Component Rendered")
  return (
    <>
      <div className="stat-title pr-5">Moves List</div>
          <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 py-5 mb-6 rounded-lg shadow-md bg-base-100">
            {moves && moves.map((item, index) => (
              <div key={index} className="">
                <div className="stat-value pr-5 text-3xl md:text-4xl">
                  <div>
                    <div className="ml-2 w-full mr-1 capitalize">
                      <MoveItem link={item.move.name} move={item.move} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </>
  )
}

export default MovesList

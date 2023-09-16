import React from 'react'
import { Link } from 'react-router-dom'

const MoveItem = ({move}) => {
  return (
      <Link className='w-full' to={`/move/${move.name}`}>
        <div className="flex btn btn-outline btn-sm mb-3">{move.name}</div>
        </Link>
  )
}

export default MoveItem

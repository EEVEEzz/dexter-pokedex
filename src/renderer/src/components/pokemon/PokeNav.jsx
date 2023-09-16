import React, { useRef } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { FaListAlt, FaHouseUser, FaGlobe, FaUpload } from 'react-icons/fa'

const PokeNav = ({ pokeID }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMathRoute = (route) => {
    try {
      if (route === location.pathname) {
        return true
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <footer className="">
      <ul className="btm-nav">
        <div className="flex-row justify-evenly">
          {pokeID - 1 > 0 && (
            <Link
              to={`/pokemon/${pokeID - 1}`}
              className="btn btn-outline text-xs btn-error btn-sm"
            >
              #{pokeID - 1} Back
            </Link>
          )}
          <Link to="/" className="btn btn-outline btn-warning text-xs btn-sm">
            Back to search
          </Link>

          {pokeID !== 1010 && (
            <Link
              to={`/pokemon/${pokeID + 1}`}
              className="btn btn-outline text-xs btn-success btn-sm"
            >
              Next #{pokeID + 1}
            </Link>
          )}
        </div>
      </ul>
    </footer>
  )
}

export default PokeNav

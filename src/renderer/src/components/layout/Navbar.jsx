import React from 'react'
import { FaSkull } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import spinner from './assets/pokeball.gif'

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral font-bold text-neutral-content">
      <div className="container mx-auto">
        <div className="flex items-center px-2 mx-2">
          {/* <FaSkull className="inline pr-2 text-4xl" /> */}
          <Link className="text-lg pl-1 align-middle" to="/">
            {title}
          </Link>
          <img width={50} src={spinner} alt="" />
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Pokedex'
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar

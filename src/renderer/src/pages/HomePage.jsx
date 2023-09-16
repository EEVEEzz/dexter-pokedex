import React from 'react'
import SearchResult from '../components/pokemon/SearchResult'
import Search from '../components/pokemon/Search'
import Meta from '../components/layout/Meta'

const HomePage = () => {
  return (
    <>
      <Meta title={`DEXTER - v2.0.1`} />
      <Search />
      <SearchResult className="text-5xl" />
    </>
  )
}

export default HomePage

import React from 'react'
import { useUserContext } from '../context/UserContext'

const SearchBar = () => {
  const {  search,  setSearch, applyFilters,} = useUserContext();
  return (
    <div>
    <div className="wrapper-input">
      <input type="text" placeholder='Search...' value={search} id="searchInput" onChange={(e)=> setSearch(e.target.value)} />
       <div className='fellow-search-btn' onClick={applyFilters}>
       </div>
    </div>
    </div>
  )
}

export default SearchBar

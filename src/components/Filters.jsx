import React from 'react'
import { useUserContext } from '../context/UserContext'

const Filters = () => {
  const { years, setYears, year, setYear, applyFilters,resetFilters, country, setCountry, countries,  category, setCategory , categories} = useUserContext();
  return (
    <aside className="filters">
      <h3>Filter</h3>
      <label>
        Category
        <select id="categoryFilter" value={category} onChange={(e)=> setCategory(e.target.value)}>
          <option value="">All</option>
          {
            categories.map((y) => {
              return <option key={y} value={y}>{y}</option>
            })
          }
        </select>
      </label>

      <label>
        Year
        <select id="yearFilter" value={year} onChange={(e) => setYear(Number(e.target.value))} >
          <option value="">All</option>
          {
            years.map((y) => {
              return <option key={y} value={y}>{y}</option>
            })
          }
        </select>
      </label>

      <label>
        Country
        <select id="countryFilter" value={country} onChange={(e)=> setCountry(e.target.value)}>
          <option value="">All</option>
          {countries.map((c) => {
            return <option key={c} value={c}>{c}</option>
          })}
        </select>
      </label>

      <div className="filter-buttons">
        <button id="applyFilters" onClick={applyFilters}>Apply</button>
        <button id="resetFilters" className="reset" onClick={resetFilters}>Reset</button>
      </div>
    </aside>
  )
}

export default Filters

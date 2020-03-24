import React from 'react'

export const SortByRating = (props) => {
  const { sortByRating, setSortByRating } = props

  return (
    <>
      <select value={sortByRating} onChange={(event) => setSortByRating(event.target.value)}>
        <option value="" selected>Sort by rating</option>
        <option value="ascending">Ascending (low to high)</option>
        <option value="descending">Descending (high to low)</option>
      </select>
    </>
  )
}
import React from 'react'

export const SortByPrice = (props) => {
  const { sortByPrice, setSortByPrice } = props

  return (
    <>
      <select value={sortByPrice} onChange={(event) => setSortByPrice(event.target.value)}>
        <option value="none" selected>Sort by price</option>
        <option value="ascending">Ascending (low to high)</option>
        <option value="descending">Descending (high to low)</option>
      </select>
    </>
  )
}
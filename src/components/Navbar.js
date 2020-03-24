import React from 'react'

export const Navbar = () => {
  return (
    <>
      <nav>
        <form action="">
          <select>
            <option value="" selected>Sort by price</option>
            <option value="ascending">Ascending (low to high)</option>
            <option value="descending">Descending (high to low)</option>
          </select>
        </form>
        <form action="">
          <select>
            <option value="" selected>Sort by rating</option>
            <option value="ascending">Ascending (low to high)</option>
            <option value="descending">Descending (high to low)</option>
          </select>
        </form>
        <form action="">
          <label htmlFor="home">Home delivery<input type="checkbox" name="delivery" id="home" value="home" /></label>
          <label htmlFor="table">Table booking<input type="checkbox" name="delivery" id="table" value="table" /></label>
        </form>
      </nav>
    </>
  )
}
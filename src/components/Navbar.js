/* eslint-disable max-len */
import React, { useState } from 'react'
import { Checkbox } from './Checkbox'
import { SortByPrice } from './SortByPrice'
import { SortByRating } from './SortByRating'

export const Navbar = () => {
  const [homeDelivery, setHomeDelivery] = useState(false)
  const [tableBooking, setTableBooking] = useState(false)
  const [sortByPrice, setSortByPrice] = useState('none')
  const [sortByRating, setSortByRating] = useState('none')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <nav>
        <form action="" onSubmit={handleSubmit}>
          <SortByRating sortByRating={sortByRating} setSortByRating={setSortByRating} />
          <SortByPrice sortByPrice={sortByPrice} setSortByPrice={setSortByPrice} />
          <Checkbox homeDelivery={homeDelivery} setHomeDelivery={setHomeDelivery} tableBooking={tableBooking} setTableBooking={setTableBooking} />
          <button type="submit">Submit</button>
        </form>
      </nav>
    </>
  )
}
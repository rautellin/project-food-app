/* eslint-disable max-len */
import React from 'react'
import { Checkbox } from './Checkbox'
import { SortByPrice } from './SortByPrice'
import { SortByRating } from './SortByRating'
import { Submit } from './Submit'
import { Deselect } from './Deselect'

export const Navbar = (props) => {
  const { restaurants, setRestaurants, homeDelivery, setHomeDelivery, tableBooking, setTableBooking, sortByPrice, setSortByPrice, sortByRating, setSortByRating } = props

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
          <Deselect setHomeDelivery={setHomeDelivery} setTableBooking={setTableBooking} setSortByPrice={setSortByPrice} setSortByRating={setSortByRating} />
          <Submit restaurants={restaurants} setRestaurants={setRestaurants} homeDelivery={homeDelivery} tableBooking={tableBooking} sortByPrice={sortByPrice} sortByRating={sortByRating} />
        </form>
      </nav>
    </>
  )
}
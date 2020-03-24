import React from 'react'

export const Submit = (props) => {
  const { restaurants, setRestaurants, homeDelivery, tableBooking, sortByRating } = props

  const submitHandler = () => {
    if (homeDelivery === true) {
      const filteredArray = restaurants.filter((restaurant) => restaurant.restaurant.highlights.includes('Delivery'))
      setRestaurants(filteredArray);
    } else if (tableBooking === true) {
      const filteredArray = restaurants.filter((restaurant) => restaurant.restaurant.highlights.includes('Table booking recommended'))
      console.log(filteredArray);
      setRestaurants(filteredArray);
    } else if (sortByRating === 'descending') {
      const sortedArray = restaurants.sort((a, b) => a.restaurant.user_rating.aggregate_rating - b.restaurant.user_rating.aggregate_rating)
      console.log(sortedArray)
    } else if (sortByRating === 'ascending') {
      const sortedArray = restaurants.sort((a, b) => b.restaurant.user_rating.aggregate_rating - a.restaurant.user_rating.aggregate_rating)
      console.log(sortedArray)
    }
    return restaurants
  }

  return (
    <>
      <button type="submit" onClick={submitHandler}>Submit</button>
    </>
  )
}
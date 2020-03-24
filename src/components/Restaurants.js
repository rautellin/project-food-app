import React, { useEffect } from 'react'

export const Restaurants = (props) => {
  const apiKey = '2fa0e45438e18d9c3ca8b7582953c2bb'
  const cityId = 282 // Las Vegas
  const cuisineId = 25 // Chinese

  const { restaurants, setRestaurants } = props

  useEffect(() => {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&cuisines=${cuisineId}`, {
      headers: {
        'user-key': apiKey
      }
    })
      .then((res) => res.json())
      .then((json) => {
        setRestaurants(json.restaurants)
      })
  })

  return (
    <>
      <section>
        {restaurants.map((restaurant, index) =>
          <>
            <article key={index}>
              <h2>{restaurant.restaurant.name}</h2>
              <p>Average cost (2 people): {restaurant.restaurant.average_cost_for_two}{restaurant.restaurant.currency}</p>
              <p>Address: {restaurant.restaurant.location.address}</p>
              <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating} {restaurant.restaurant.user_rating.rating_text}</p>
            </article>
          </>)}
      </section>
    </>
  )
}
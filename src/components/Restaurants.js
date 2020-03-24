/* eslint-disable max-len */
import React from 'react'

export const Restaurants = (props) => {
  const { restaurants } = props

  return (
    <>
      <section>
        <h2>Restaurants</h2>
        {restaurants.map((restaurant, index) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          <>
            <article key={index}>
              <img src={restaurant.restaurant.featured_image} alt="" />
              <h3>{restaurant.restaurant.name}</h3>
              {restaurant.restaurant.currency === 'Rs.' && <p>Average cost (2 people): {(Math.round(restaurant.restaurant.average_cost_for_two * 0.013 * 100) / 100).toFixed(2)} $</p>}
              {restaurant.restaurant.currency === '$' && <p>Average cost (2 people): {(Math.round(restaurant.restaurant.average_cost_for_two * 100) / 100).toFixed(2)} $</p>}
              {restaurant.restaurant.currency === '€' && <p>Average cost (2 people): {(Math.round(restaurant.restaurant.average_cost_for_two * 1.08 * 100) / 100).toFixed(2)} $</p>}
              {restaurant.restaurant.currency === 'AED' && <p>Average cost (2 people): {(Math.round(restaurant.restaurant.average_cost_for_two * 0.27 * 100) / 100).toFixed(2)} $</p>}
              {restaurant.restaurant.currency === '£' && <p>Average cost (2 people): {(Math.round(restaurant.restaurant.average_cost_for_two * 1.16 * 100) / 100).toFixed(2)} $</p>}
              <p>Address: {restaurant.restaurant.location.address}</p>
              <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating} {restaurant.restaurant.user_rating.rating_text} ({restaurant.restaurant.user_rating.votes})</p>
            </article>
          </>)}
      </section>
    </>
  )
}
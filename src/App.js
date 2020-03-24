import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Restaurants } from './components/Restaurants'

export const App = () => {
  const [restaurants, setRestaurants] = useState([])
  const [homeDelivery, setHomeDelivery] = useState(false)
  const [tableBooking, setTableBooking] = useState(false)
  const [sortByPrice, setSortByPrice] = useState('none')
  const [sortByRating, setSortByRating] = useState('none')

  const apiKey = '2fa0e45438e18d9c3ca8b7582953c2bb'
  const cityId = 282 // Las Vegas
  const cuisineId = 25 // Chinese

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
  }, [])

  return (
    <>
      <header className="header">
        <h1>Chinese in <span>Las Vegas</span></h1>
      </header>
      <Navbar
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        homeDelivery={homeDelivery}
        setHomeDelivery={setHomeDelivery}
        tableBooking={tableBooking}
        setTableBooking={setTableBooking}
        sortByPrice={sortByPrice}
        setSortByPrice={setSortByPrice}
        sortByRating={sortByRating}
        setSortByRating={setSortByRating} />
      <Restaurants restaurants={restaurants} />
    </>
  )
}

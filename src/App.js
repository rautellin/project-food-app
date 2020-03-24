import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Restaurants } from './components/Restaurants'

export const App = () => {
  const [restaurants, setRestaurants] = useState([])

  return (
    <>
      <header>
        <h1>Chinese in <span>Las Vegas</span></h1>
      </header>
      <Navbar />
      <Restaurants restaurants={restaurants} setRestaurants={setRestaurants} />
    </>
  )
}

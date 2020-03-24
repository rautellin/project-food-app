import React from 'react'

export const Deselect = (props) => {
  const { setHomeDelivery, setTableBooking, setSortByPrice, setSortByRating } = props

  const deselectHandler = () => {
    setHomeDelivery(false)
    setTableBooking(false)
    setSortByPrice('none')
    setSortByRating('none')
    document.getElementById('home').removeAttribute('checked')
    document.getElementById('table').removeAttribute('checked')
  }

  return (
    <>
      <button type="submit" onClick={deselectHandler}>Deselect</button>
    </>
  )
}
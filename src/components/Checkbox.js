import React from 'react'

export const Checkbox = (props) => {
  const { homeDelivery, setHomeDelivery, tableBooking, setTableBooking } = props

  const handleHomeDelivery = () => {
    if (!homeDelivery) {
      setHomeDelivery(true)
    } else {
      setHomeDelivery(false)
    }
  }

  const handleTableBooking = () => {
    if (!tableBooking) {
      setTableBooking(true)
    } else {
      setTableBooking(false)
    }
  }

  return (
    <>
      <label htmlFor="home">Home delivery<input onChange={handleHomeDelivery} type="checkbox" id="home" /></label>
      <label htmlFor="table">Table booking<input onChange={handleTableBooking} type="checkbox" id="table" /></label>
    </>
  )
}
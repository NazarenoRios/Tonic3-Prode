import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '../common/Modal'
import CountryModal from '../common/CountryModal'

function CheckCountryModal() {

    const [country,setCountry]=useState([])

    useEffect(() => {
        axios.get('https://geolocation-db.com/json/').then(res => setCountry(res.data.country_name))
      },[country.length])

      console.log(country)

  return (
    <>
        {country === "Argentina" || country === "Brazil" || country === "United States" ? (<Modal/>) : (<CountryModal/>)}
    </>
  )
}

export default CheckCountryModal
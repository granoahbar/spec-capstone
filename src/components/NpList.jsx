import React, { useEffect, useState} from 'react'
import axios from 'axios'
import NpCard from './NpCard'
import styles from "./NpList.module.css"

export default function NpList() {
  const [parks, setParks] = useState([])

    const getNationalParks = () => {
        axios.get(`https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_API_KEY}`, {
            params: {
                limit:600
            }
        })
        .then((response) => {
            const filteredResults = response.data.data.filter((park) => {
                return park.designation === "National Park";
              })
            setParks(filteredResults)
        })
        .catch(error => console.error(`Error: $(error)`))
    }

    useEffect(() => {
        getNationalParks()
    },[])

  return (
    <div className={styles.np_list}>
      <NpCard parks={parks}/>
    </div>
  )
}

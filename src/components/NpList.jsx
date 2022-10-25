import React from 'react'
import "./NpList.modules.css"
import NationalPark from './NationalParkCard'

export default function NpList(props) {
  console.log(props)
  return (
    <div>
        {props.nationalParks.map((park) => <p>{park.fullName}</p>)}
    </div>
  )
}

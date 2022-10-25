import React, {useEffect, useState} from 'react'
import NpList from '../components/NpList'
import { useNavigate } from "react-router-dom";
import { getNationalParks } from '../utils/api';


export default function Home(props) {
    const [nationalParks, setNationalParks] = useState([])

    useEffect(() => {
        getNationalParks().then((parks) => setNationalParks(parks))
    }, [])      

  return (
    <NpList nationalParks={nationalParks} />
  )
}

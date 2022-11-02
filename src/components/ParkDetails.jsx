import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import styles from "./ParkDetails.module.css"

export default function ParkDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        axios
          .get(`https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_API_KEY}`)
          .then((res) => {
          setDetails(res.data);
        });
      }, []);

  return (
    <div>ParkDetails</div>
  )
}
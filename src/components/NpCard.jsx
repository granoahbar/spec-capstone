import react from 'react'
import styles from "./NpCard.module.css"
import { Navigate, useNavigate } from 'react-router-dom'


export default function NpCard(props) { 
    const {parks, park} = props
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/park/${parks.id}`)
    }
   
    return(
        parks.map((park, index) => {
            return (
                <div onClick={handleClick} className={styles.national_park_card} key={park.id}>
                    <img src={park.images[0].url} alt="" />
                    <p  className={styles.park_name}>{park.fullName}</p>
                </div>
            )
        })
    )
}
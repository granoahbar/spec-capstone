import react from 'react'
import styles from "./NpCard.module.css"

export default function NpCard(props) { 
    const {parks} = props

    return(
        parks.map((park, index) => {
            return (
                <div className={styles.national_park_card} key={park.id}>
                    <img src={park.images[0].url} alt="" />
                    <p className={styles.park_name}>{park.fullName}</p>
                </div>
            )
        })
    )
}
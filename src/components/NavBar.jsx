import React from 'react'
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav_bar}>
        <h1 className={styles.logo}>
            National Parks
        </h1>
        <ul className={styles.nav_buttons}>
            <li>
                My Badges
            </li>
            <li>
                Visit nps.org
            </li>
        </ul>
    </nav>
  )
}

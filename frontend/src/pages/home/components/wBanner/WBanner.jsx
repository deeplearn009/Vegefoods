import React from 'react'
import styles from './WBanner.module.scss'

const WBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>We serve Fresh Vegestables & Fruits</h1>
                <h2>We deliver organic vegetables & fruits</h2>
                <button>View Details</button>
            </div>
        </div>
    )
}
export default WBanner

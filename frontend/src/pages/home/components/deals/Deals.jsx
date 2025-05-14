import React from 'react'
import styles from './Deal.module.scss'

const Deals = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p id={styles.top}>Featured Products</p>
                    <h2>Our Products</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia <br/> and Consonantia </p>
                    <h3>Spinach</h3>
                    <p id={styles.price}>$10 <span>now $5 only</span></p>
                </div>
            </div>
        </div>
    )
}
export default Deals

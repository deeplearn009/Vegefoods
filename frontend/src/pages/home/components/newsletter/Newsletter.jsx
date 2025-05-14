import React from 'react'
import styles from './News.module.scss'

const Newsletter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Get e-mail updates about our latest shops and special offers</p>
                </div>
                <div className={styles.right}>
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default Newsletter

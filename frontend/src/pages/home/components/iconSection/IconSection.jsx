import React from 'react'
import styles from './IconSection.module.scss'
import {FcShipped} from "react-icons/fc";

const IconSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <FcShipped size={80}/>
                    </div>
                    <div className={styles.description}>
                        <h3>Free Shipping</h3>
                        <p>On order over $100</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <FcShipped size={80}/>
                    </div>
                    <div className={styles.description}>
                        <h3>Free Shipping</h3>
                        <p>On order over $100</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <FcShipped size={80}/>
                    </div>
                    <div className={styles.description}>
                        <h3>Free Shipping</h3>
                        <p>On order over $100</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <FcShipped size={80}/>
                    </div>
                    <div className={styles.description}>
                        <h3>Free Shipping</h3>
                        <p>On order over $100</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default IconSection

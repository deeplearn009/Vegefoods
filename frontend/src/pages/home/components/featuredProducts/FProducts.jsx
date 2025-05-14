import React, {useEffect} from 'react'
import styles from './FProducts.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getProductsThunk} from "../../../../redux/reducers/productSlice.js";
import FCard from "./components/FCard/FCard.jsx";

const FProducts = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.products.products)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p id={styles.top}>Featured Products</p>
                    <h2>Our Products</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
                </div>
                <div className={styles.cards}>
                    {data?.map(item => <FCard item={item} />)}
                </div>
            </div>
        </div>
    )
}
export default FProducts

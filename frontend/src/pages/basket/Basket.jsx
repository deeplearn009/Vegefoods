import React, {useEffect} from 'react'
import styles from './Basket.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getBasketThunk} from "../../redux/reducers/basketSlice.js";
import {Link} from "react-router";
import BCard from './components/BCard/BCard.jsx'

const Basket = () => {

    const dispatch = useDispatch()

    const basket = useSelector(state => state.basket.basket)

    useEffect(() => {
        dispatch(getBasketThunk())
    })

    return (
        <div className={styles.container}>
            <header>
                <Link to="/">Home</Link>
                <Link to="/wishlist">Wishlist</Link>
            </header>
            <div className={styles.cards}>
                {basket?.map(item => <BCard item={item} />)}
            </div>
        </div>
    )
}
export default Basket

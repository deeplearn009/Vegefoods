import React from 'react'
import styles from './FCard.module.scss'
import {useDispatch} from "react-redux";
import {postBasketThunk} from "../../../../../../redux/reducers/basketSlice.js";
import {postWishlistThunk} from "../../../../../../redux/reducers/wishlistSlice.js";

const FCard = ({item}) => {

    const dispatch = useDispatch()

    const addToBasket = () => {
        dispatch(postBasketThunk(item))
    }

    const addToWishlist = () => {
        dispatch(postWishlistThunk(item))
    }


    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={item.image} alt={item.name}/>
            </div>
            <div className={styles.description}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => addToBasket()}>Add To Basket</button>
                <button onClick={() => addToWishlist()}>Add To Wishlist</button>
            </div>
        </div>
    )
}
export default FCard

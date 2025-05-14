import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice.js";
import basketSlice from "./reducers/basketSlice.js";
import wishlistSlice from "./reducers/wishlistSlice.js";


export const store = configureStore({
    reducer: {
        products: productSlice,
        basket: basketSlice,
        wishlist: wishlistSlice
    }
})
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getWishlistThunk = createAsyncThunk("/wishlist/get", async () => {
    const res = await axios.get("http://localhost:6060/wishlist");
    return res.data
})

export const postWishlistThunk = createAsyncThunk("/wishlist/post", async (data) => {
    await axios.post("http://localhost:6060/wishlist", data);
    return data
})

export const deleteWishlistThunk = createAsyncThunk("/wishlist/delete", async (id) => {
    await axios.delete(`http://localhost:6060/wishlist/${id}`);
    return id
})

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder

            .addCase(getWishlistThunk.fulfilled, (state, action) => {
                state.wishlist = action.payload;
            })

            .addCase(postWishlistThunk.fulfilled, (state, action) => {
                state.wishlist.push(action.payload);
            })

            .addCase(deleteWishlistThunk.fulfilled, (state, action) => {
                state.wishlist = state.wishlist.filter(item => item._id !== action.payload);
            })
    }
})

export default wishlistSlice.reducer;
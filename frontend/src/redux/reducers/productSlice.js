import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk("/products/get", async () => {
    const res = await axios.get("http://localhost:6060/products");
    return res.data
})

export const postProductsThunk = createAsyncThunk("/products/post", async (data) => {
    await axios.post("http://localhost:6060/products", data);
    return data
})

export const deleteProductsThunk = createAsyncThunk("/products/delete", async (id) => {
    await axios.delete(`http://localhost:6060/products/${id}`);
    return id
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder

            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(postProductsThunk.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })

            .addCase(deleteProductsThunk.fulfilled, (state, action) => {
                state.products = state.products.filter(item => item._id !== action.payload);
            })
    }
})

export default productSlice.reducer;
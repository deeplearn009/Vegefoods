import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
}, {timestamps: true})

const WishlistModel = mongoose.model('Wishlist', wishlistSchema)

export default WishlistModel
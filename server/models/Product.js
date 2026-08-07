import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    unit: String,

    supplier: String,
    supplierId: Number,

    city: String,

    rating: Number,
    reviewCount: Number,

    stock: Number,
    availability: String,

    description: String,
    image: String,

    priceHistory: [
        {
            date: String,
            price: Number
        }
    ],

    reviews: [
        {
            id: Number,
            user: String,
            rating: Number,
            comment: String
        }
    ]
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
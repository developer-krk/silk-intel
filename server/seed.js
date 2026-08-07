import mongoose from "mongoose";
import products from "./../src/data/products.js";
import Product from "./models/Product.js";

mongoose.connect("mongodb://127.0.0.1:27017/silkintel")
    .then(async () => {

        console.log("MongoDB Connected");

        await Product.deleteMany();

        await Product.insertMany(products);

        console.log("Products added to MongoDB");

        process.exit();
    })
    .catch((error) => {
        console.log(error);
    });
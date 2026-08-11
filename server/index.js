// import products from "../src/data/products.js";
import Product from "./models/Product.js";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
const app = express();
// connectDB();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("SilkIntel Backend Running 🚀");
});
app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});
app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    // res.send(`You requested product ${id}`);
    console.log(id);
    // const product = products.find(p => p.id === Number(id));
    const product = await Product.findById(id);
    if (!product)
        return res.status(404).json({ message: "Product not found" });
    res.json(product);
})

app.get("/api/products/:id/related", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            });
        }
        const relatedproducts = await Product.find({ category: product.category, _id: { $ne: id } }).limit(4);
        res.json(relatedproducts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
})


connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server running on http://localhost:5000");
    });
});
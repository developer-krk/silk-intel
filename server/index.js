import products from "../src/data/products.js";
import cors from "cors";
import express from "express";
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("SilkIntel Backend Running 🚀");
});
app.get("/api/products", (req, res) => {
    res.json(products);
});
app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    // res.send(`You requested product ${id}`);
    console.log(id);
    const product = products.find(p => p.id === Number(id));
    if (!product)
        return res.status(404).json({ message: "Product not found" });
    res.json(product);
})
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

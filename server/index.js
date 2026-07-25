import products from "../src/data/products.js";
import cors from "cors";
import express from "express";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.send("SilkIntel Backend Running 🚀");
});
app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

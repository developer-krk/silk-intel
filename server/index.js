// import products from "../src/data/products.js";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";  
const app = express();
// connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/products",productRouter);
app.get("/", (req, res) => {
    res.send("SilkIntel Backend Running 🚀");
});
connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server running on http://localhost:5000");
    });
});
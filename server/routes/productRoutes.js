import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    // res.send(`You requested product ${id}`);
    console.log(id);
    // const product = products.find(p => p.id === Number(id));
    const product = await Product.findById(id);
    if (!product)
        return res.status(404).json({ message: "Product not found" });
    res.json(product);
})

router.get("/:id/related", async (req, res) => {
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

router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(
            id,
            req.body,
            {
                new:true
            }
        );
        if(!product){
            return res.status(404).json({
                message:"Product not found"
            });
        }
        res.json(product);
    }
    catch(error){
        console.log(error);
        res.status(500).json(
            {
                message:"Server Error"
            }
        );
    }
})
router.delete("/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({
                message:"product not found "
            });
        }
        res.json({
            message:"Product deleted successfully",
            product:product
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Server Error"
        });
    }
})
export default router;
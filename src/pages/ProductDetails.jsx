import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductInfo"
import PriceHistory from "../components/PriceHistory"
import PricePrediction from "../components/PricePrediction"
import Reviews from "../components/Reviews"
import RelatedProducts from "../components/RelatedProducts";
import "./ProductDetails.css";
import { useState, useEffect } from "react";
function ProductDetails() {
    const { id } = useParams();
    //const product = products.find((product) => product.id === Number(id))
    const [product, setProduct] = useState(null);
    useEffect(() => {
        async function fetchProduct(id) {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
            }
            catch (error) {
                console.log(error);

            }
        }
        fetchProduct(id);

    }, [id]
    )
    if (!product) {
        return <h2>Product Not Found</h2>;
    }
    return (
        <div className="product-details">
            <ProductInfo product={product} />
            <PriceHistory priceHistory={product.priceHistory} />
            <PricePrediction product={product} />
            <Reviews reviews={product.reviews} />
            <RelatedProducts product={product} />
        </div>
    )
}
export default ProductDetails


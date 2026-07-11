import { useParams } from "react-router-dom"
import products from "../data/products";
import ProductInfo from "../components/ProductInfo"
import PriceHistory from "../components/PriceHistory"
import PricePrediction from "../components/PricePrediction"
import Reviews from "../components/Reviews"
import RelatedProducts from "../components/RelatedProducts";
import "./ProductDetails.css";
function ProductDetails() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id))
    if (!product) {
        return <h2>Product Not Found</h2>;
    }
    return (
        <div className="product-details">
            <ProductInfo product={product} />
            <PriceHistory priceHistory={product.priceHistory} />
            <PricePrediction product={product}/>
            <Reviews reviews={product.reviews} />
            <RelatedProducts product={product} products={products} />
        </div>
    )
}
export default ProductDetails
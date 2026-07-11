import { useParams } from "react-router-dom"
import products from "../data/products";
function ProductInfo({ product }) {

    return (
        <section>
            {product.image ?
                <img src={product.image} alt={product.name} />
                :
                <div className="image-placeholder">
                    No Image
                </div>
            }
            <h2>{product.name}</h2>
            <p>Category : {product.category}</p>
            <p>Price : ₹{product.price}/meter</p>
            <p>Supplier : {product.supplier}</p>
            <p>Location : {product.city}</p>
            <p>Rating : {product.rating}⭐️</p>
            <p>Stock: {product.stock}</p>
            <p>Description : {product.description}</p>
            <button>Enquire Now</button>
        </section>
    )
}
function PriceHistory({ priceHistory }) {
    return (
        <div>
            <h3>Price History</h3>
        </div>
    )
}
function PricePrediction() {
    return (
        <div>
            <h3>Predict Prices</h3>
        </div>
    )
}
function Review({ review }) {
    return (
        <div>
            <h5>{review.user}</h5>
            <p>{review.rating}⭐️</p>
            <p>{review.comment}</p>
        </div>
    )
}
function Reviews({ reviews }) {
    return (
        <div>
            <h3>Reviews</h3>
            {
                reviews.map((review) => <Review key={review.id} review={review} />)
            }
        </div>
    )
}
function RelatedProducts({ product }) {
    return (
        <div>
            <h3>Related Products</h3>
        </div>
    )
}
function ProductDetails() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id))
    if (!product) {
        return <h2>Product Not Found</h2>;
    }
    return (
        <div>
            <ProductInfo product={product} />
            <PriceHistory priceHistory={product.priceHistory} />
            <PricePrediction />
            <Reviews reviews={product.reviews} />
            <RelatedProducts product={product} />
        </div>
    )
}
export default ProductDetails
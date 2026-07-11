import "./ProductCard.css"
import { Link } from "react-router-dom";
function ProductCard({id, name, price, city, rating, image }) {
    return (
        <div className="product-card">

            <div className="product-image">
                {image ? (
                    <img src={image} alt={name} />
                ) : (
                    <div className="image-placeholder">
                        No Image
                    </div>
                )}
            </div>
            <h3>{name}</h3>
            <p className="price">{price}</p>
            <p>📍 {city}</p>
            <p>⭐ {rating}</p>
            <Link to={"/products/"+id}>
                <button>
                    View Details
                </button>
            </Link>
        </div>
    );
}
export default ProductCard;
import "./ProductCard.css"
function ProductCard({ name, price, city, rating, image }) {
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
            <button>
                View Details
            </button>
        </div>
    );
}
export default ProductCard;
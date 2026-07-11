
function ProductInfo({ product }) {

    return (
        <section className="product-info">
            <div className="product-image">
                {product.image ?
                    <img src={product.image} alt={product.name} />
                    :
                    <div className="image-placeholder">
                        No Image
                    </div>
                }
            </div>
            <div className="product-content">
                <h2>{product.name}</h2>
                <p>Category : {product.category}</p>
                <p>Price : ₹{product.price}/meter</p>
                <p>Supplier : {product.supplier}</p>
                <p>Location : {product.city}</p>
                <p>Status :{product.availability}</p>
                <p>Rating : {product.rating}⭐️</p>
                <p>Stock: {product.stock} {product.unit}</p>
                <p>Description : {product.description}</p>
                <button>Enquire Now</button>
            </div>
        </section>
    )
}

export default ProductInfo
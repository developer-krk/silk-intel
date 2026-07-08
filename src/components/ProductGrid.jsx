import ProductCard from "./ProductCard";
function ProductGrid({products}) {
    return (
        <div className="products-grid">
            {
                products.map((product) => <ProductCard
                    key={product.id}
                    name={product.name}
                    city={product.city}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                />)
            }
        </div>
    )
}
export default ProductGrid
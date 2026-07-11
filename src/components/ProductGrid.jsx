import ProductCard from "./ProductCard";
import "./ProductGrid.css";
function ProductGrid({products}) {
    return (
        <div className="products-grid">
            {
                products.map((product) => <ProductCard
                    key={product.id}
                    id ={product.id}
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
import ProductCard from "./ProductCard";
import products from "../data/products";
import "./FeaturedProducts.css";
function FeaturedProducts() {
    return (
        <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="products-grid">
                {
                    products.map(product => (
                         <ProductCard
                    key={product.id}
                    name={product.name}
                    city={product.city}
                    price={product.price}
                    rating={product.rating}
                    image={product.image} />
                ))
                }
            </div>

        </section>
    );
}

export default FeaturedProducts;
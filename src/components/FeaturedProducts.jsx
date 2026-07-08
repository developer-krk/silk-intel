import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import SearchBar from "./SearchBar";
import ProductGrid from "./ProductGrid";
import "./FeaturedProducts.css";

function FeaturedProducts() {
    const [search, setSearch] = useState("");
    const filteredProducts = products.filter(product => (
        product.name.toLowerCase().includes(search.toLowerCase())
    )
    )
    return (
        <section className="featured-products">
            <h2>Featured Products</h2>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="products-grid">
                {
                    filteredProducts.length > 0 ?
                        <ProductGrid products={filteredProducts} />
                        :
                        <div className="no-products">
                            <h3>No products found 😕</h3>
                            <p>Try searching for another textile.</p>
                        </div>
                }
            </div>
        </section>
    );
}

export default FeaturedProducts;
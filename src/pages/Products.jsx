import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import { useState } from "react";
import products from "../data/products";
import CategoryFilter from "../components/CategoryFilter";

function Products() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setCategory] = useState("All");
    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    return (
        <div>
            <h1>Products Page</h1>
            <SearchBar search={search} setSearch={setSearch} />
            <CategoryFilter selectedCategory={selectedCategory} setCategory={setCategory} />
            <ProductGrid products={filteredProducts} />
        </div>
    );
}

export default Products;
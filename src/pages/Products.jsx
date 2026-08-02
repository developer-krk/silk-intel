import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import { useEffect, useState } from "react";
//import products from "../data/products";
import CategoryFilter from "../components/CategoryFilter";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("http://localhost:5000/api/products");
                const data = await response.json();
                setProducts(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [])
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
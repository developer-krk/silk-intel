import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import "./AdminProducts.css";

function AdminProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        try {
            const response = await fetch(
                "http://localhost:5000/api/products"
            );

            const data = await response.json();
            setProducts(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    function handleProductAdded(product) {
        setProducts([...products, product]);
    }

    function handleProductUpdated(updatedProduct) {
        setProducts(
            products.map((product) =>
                product._id === updatedProduct._id
                    ? updatedProduct
                    : product
            )
        );
    }

    function handleProductDeleted(id) {
        setProducts(
            products.filter((product) => product._id !== id)
        );
    }

    return (
        <div className="admin-products">

            <h1>Product Management</h1>

            <div className="admin-form">
                <ProductForm
                    onProductAdded={handleProductAdded}
                />
            </div>

            <ProductTable
                products={products}
                onProductUpdated={handleProductUpdated}
                onProductDeleted={handleProductDeleted}
            />

        </div>
    );
}

export default AdminProducts;
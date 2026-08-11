import ProductGrid from "./ProductGrid"
import { useState, useEffect } from "react"
function RelatedProducts({ product }) {

    //const relatedProducts = products.filter((p)=>p.category===product.category && p.id !==product.id);
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        async function fetchRelatedProducts() {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${product._id}/related`);
                const data = await response.json();
                setRelatedProducts(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchRelatedProducts();
    }, [product._id])
    return (
        <div className="related-products">
            <h3>Related Products</h3>
            <ProductGrid products={relatedProducts} />
        </div>
    )
}

export default RelatedProducts

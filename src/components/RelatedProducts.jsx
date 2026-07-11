import ProductGrid from "./ProductGrid"
function RelatedProducts({ product ,products}) {
    const relatedProducts = products.filter((p)=>p.category===product.category && p.id !==product.id);
    return (
        <div className="related-products">
            <h3>Related Products</h3>
            <ProductGrid products = {relatedProducts}/>
        </div>
    )
}

export default RelatedProducts
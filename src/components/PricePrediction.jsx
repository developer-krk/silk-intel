
function PricePrediction({product}) {
    return (
        <div className="price-prediction">
            <h3>Predict Prices</h3>
            <p>Current price : {product.price}/{product.unit}</p>
        </div>
    )
}

export default PricePrediction
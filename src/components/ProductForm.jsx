import { useState } from "react";

function ProductForm({ onProductAdded }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [unit, setUnit] = useState("");
    const [supplier, setSupplier] = useState("");
    const [city, setCity] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const newProduct = {
            name,
            category,
            price: Number(price),
            unit,
            supplier,
            city
        };

        try {
            const response = await fetch(
                "http://localhost:5000/api/products",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newProduct)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.log(data);
                return;
            }

            onProductAdded(data);

            setName("");
            setCategory("");
            setPrice("");
            setUnit("");
            setSupplier("");
            setCity("");
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Supplier"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <button type="submit">
                    Add Product
                </button>

            </form>
        </div>
    );
}

export default ProductForm;
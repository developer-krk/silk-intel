function ProductTable({ products, onProductUpdated, onProductDeleted }) {

    async function handleEdit(product) {
        const newPrice = prompt(
            "Enter new price:",
            product.price
        );

        if (newPrice === null) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/products/${product._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        price: Number(newPrice)
                    })
                }
            );

            const updatedProduct = await response.json();

            if (!response.ok) {
                console.log(updatedProduct);
                return;
            }

            onProductUpdated(updatedProduct);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function handleDelete(product) {
        const confirmDelete = confirm(
            `Delete ${product.name}?`
        );

        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/products/${product._id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.log(data);
                return;
            }

            onProductDeleted(product._id);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Products</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>Supplier</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>₹{product.price}</td>
                            <td>{product.unit}</td>
                            <td>{product.supplier}</td>
                            <td>{product.city}</td>

                            <td>
                                <button
                                    onClick={() => handleEdit(product)}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(product)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
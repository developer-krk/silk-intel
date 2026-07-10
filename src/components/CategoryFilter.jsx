import products from "../data/products";
import "./CategoryFilter.css";

function CategoryButton({ category, selectedCategory, setCategory }) {
    return (
        <button
            className={category === selectedCategory ? "active" : ""}
            onClick={() => setCategory(category)}>{category}
        </button>
    )
}
const categories = ["All",
    ...new Set(products.map((product) => product.category))
];

function CategoryFilter({selectedCategory, setCategory }) {
    return (
        <div className="category-filter">
            {
                categories.map((category) => <CategoryButton
                    key={category}
                    category={category}
                    setCategory={setCategory}
                    selectedCategory={selectedCategory}
                />)
            }
        </div>
    )
}
export default CategoryFilter;

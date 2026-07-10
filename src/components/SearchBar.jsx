import "./SearchBar.css"
    function SearchBar({search,setSearch}) {
        console.log(search);
        return (
            <div className="search-bar">
                <input type="text"
                    placeholder="Search textile products..."
                    value={search}
                    onChange={(e) => (
                        setSearch(e.target.value)
                    )} />
                <button onClick={() => setSearch("")}>
                    Clear Search
                </button>
            </div>
        );
    }
    export default SearchBar;
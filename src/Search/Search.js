import "./Search.css";

function Search({ onChange, searchText }) {
  return (
    <div className="Search">
      <label>
        Search for a keyword, property, or selector:
        <input
          onChange={(e) => onChange(e.target.value)}
          placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _"
          type="text"
          value={searchText}
        />
      </label>
    </div>
  );
}

export default Search;

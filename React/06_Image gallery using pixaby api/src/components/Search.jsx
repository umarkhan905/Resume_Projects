const Search = ({ setSearch, search, fetchData }) => {
  return (
    <div className="search_container">
      <input
        type="text"
        placeholder="Search any image"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="search_btn" onClick={fetchData}>
        search
      </button>
    </div>
  );
};

export default Search;

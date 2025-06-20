export type SearchProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const Search = (props: SearchProps) => {
  const { searchTerm, setSearchTerm } = props;
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search" />

        <input
          type="text"
          placeholder="Search Through thousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;

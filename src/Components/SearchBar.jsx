import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ username, setUsername, handleSearch, loading }) => {
  const handleKeyDown = () => {
    if (event.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold">
        Find Any Github Developer Instantly
      </h2>
      <p className="mt-4 text-lg text-[#8B949E]">
        {" "}
        Search GitHub users and explore repositories instantly
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <input
          type="text"
          value={username}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter GitHub Username..."
          className="w-full max-w-lg rounded-xl border border-[#30363D] bg-[#161B22] px-5 py-4 text-white placeholder:text-[#8B949E] outline-none focus:border-[#238636]"
        />

        <button
          className="flex items-center gap-2 rounded-xl bg-[#238636] px-6 py-4 font-semibold hover:bg-[#2b963f] transition-colors"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
          <SearchIcon />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;

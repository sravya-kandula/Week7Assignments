import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {

  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  // Autofocus on load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {

    const value = e.target.value;

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  return (
    <div className="flex justify-center mb-6">

      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        onChange={handleSearch}
        className="border p-3 w-[300px] rounded shadow"
      />

    </div>
  );
}

export default SearchBar;
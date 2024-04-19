import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-slate-500"
        placeholder="Search characters by name..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

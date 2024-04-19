import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-slate-500"
        placeholder="Search characters by name..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

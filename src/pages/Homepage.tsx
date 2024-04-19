import React, { useCallback, useState } from 'react';
import SearchBar from '../components/SearchBar';
import useDebounce from '../hooks/useDebounce';

import Characters from '../components/characters/Characters';

const Homepage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
    },
    [setSearchQuery]
  );

  return (
    <div className="h-full">
      <svg
        className="absolute bottom-0 left-0 mb-8 w-40"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: 'scale(1.5)', opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Characters</h1>
        <SearchBar onSearch={handleSearch} />
        <Characters
          setSearchQuery={setSearchQuery}
          debouncedSearchQuery={debouncedSearchQuery}
        />
      </div>
    </div>
  );
};

export default Homepage;

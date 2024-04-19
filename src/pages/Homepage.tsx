import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';
import useQuery from '../hooks/useQuery';
import { CharacterResult } from '../types/types';
import SearchBar from '../components/SearchBar';

const Homepage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { data, loading, error } = useQuery<CharacterResult>('https://rickandmortyapi.com/api/character');

  // eslint-disable-next-line no-console
  console.log({ data, loading, error });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredCharacters = data?.results.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading && !data?.results) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error: {error}</div>;
  if (!filteredCharacters) return <div className="text-white">No data</div>;

  return (
    <div>
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
        <CharacterList characters={filteredCharacters} />
      </div>
    </div>
  );
};

export default Homepage;

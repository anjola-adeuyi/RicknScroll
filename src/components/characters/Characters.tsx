import React from 'react';
import CharacterList from './CharacterList';
import LoadingComponent from '../Loading';
import ErrorComponent from '../Error';
import { CharacterResult } from '../../types/types';
import useQuery from '../../hooks/useQuery';

interface CharactersProps {
  debouncedSearchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Characters: React.FC<CharactersProps> = ({ debouncedSearchQuery, setSearchQuery }) => {
  const { data, loading, error } = useQuery<CharacterResult>(
    `https://rickandmortyapi.com/api/character?name=${debouncedSearchQuery}`
  );

  // eslint-disable-next-line no-console
  console.log({ data, loading, error });

  if (error) {
    return (
      <ErrorComponent
        message="Character not found. Please try again."
        onRefresh={() => setSearchQuery('')}
      />
    );
  }

  if (loading || !data) return <LoadingComponent />;

  return <CharacterList characters={data.results} />;
};

export default Characters;

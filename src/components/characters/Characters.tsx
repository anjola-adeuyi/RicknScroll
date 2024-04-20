import React, { useCallback, useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import LoadingComponent from '../Loading';
import ErrorComponent from '../Error';
import { CharacterResult } from '../../types/types';
import useQuery from '../../hooks/useQuery';
import { API_URL_CHARACTER } from '../../utils/constant';
import useInfiniteScroll from '../../hooks/useScroll';

interface CharactersProps {
  debouncedSearchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Characters: React.FC<CharactersProps> = ({ debouncedSearchQuery, setSearchQuery }) => {
  const [page] = useState(1);
  const [pageCounter, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterResult['results']>([]);
  const [showLoadingText, setShowLoadingText] = useState(false);
  const { data, loading, error } = useQuery<CharacterResult>(
    `${API_URL_CHARACTER}?name=${debouncedSearchQuery}&page=${page}`
  );

  const fetchMoreCharacters = async (nextUrl: string) => {
    try {
      const response = await fetch(nextUrl);
      const newData: CharacterResult = (await response.json()) ?? {};
      const newCharacters = newData.results ?? [];
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    } catch (error) {
      console.error('Error fetching more characters:', error);
    } finally {
      setShowLoadingText(false);
    }
  };

  const delayedLoadMoreCharacters = useCallback(() => {
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
      data?.info.next && fetchMoreCharacters(data?.info.next);
      setShowLoadingText(false);
    }, 500);
  }, [data?.info.next]);

  const loadMoreCharacters = useCallback(() => {
    if (data?.info.next && data.info.count / 20 > pageCounter && characters.length < data.info.count) {
      setShowLoadingText(true);
      delayedLoadMoreCharacters();
    } else {
      setShowLoadingText(false);
      return;
    }
  }, [data?.info.next, data?.info.count, characters, pageCounter, delayedLoadMoreCharacters]);

  useEffect(() => {
    if (data) {
      if (pageCounter === 1) {
        setCharacters(data.results);
      } else {
        setShowLoadingText(true);
      }
    }
  }, [data, pageCounter]);

  useInfiniteScroll(loadMoreCharacters);

  if (error) {
    return (
      <ErrorComponent
        message="Character not found. Please try again."
        onRefresh={() => setSearchQuery('')}
      />
    );
  }

  if (loading || !data) return <LoadingComponent />;

  return (
    <>
      <CharacterList characters={characters} />
      {showLoadingText && (
        <div className="flex flex-col p-4 gap-4 items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
          <div className="text-center text-gray-500 text-sm">Loading more characters...</div>
        </div>
      )}
    </>
  );
};

export default Characters;

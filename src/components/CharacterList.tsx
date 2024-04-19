import React from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '../types/types';

interface CharacterListProps {
  characters: Character[];
}
const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <>
      {characters?.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
        />
      ))}
    </>
  );
};

export default CharacterList;

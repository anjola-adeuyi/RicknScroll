import React from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '../types/types';

interface CharacterListProps {
  characters: Character[];
}
const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {characters?.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
        />
      ))}
    </div>
  );
};

export default CharacterList;

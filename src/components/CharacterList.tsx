import React from 'react';
import CharacterCard from './CharacterCard';

interface Character {
  id: number;
  name: string;
  imageUrl: string;
  status: string;
}

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
          imageUrl={character.imageUrl}
          status={character.status}
        />
      ))}
    </>
  );
};

export default CharacterList;

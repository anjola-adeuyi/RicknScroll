import React from 'react';
import { Link } from 'react-router-dom';

interface CharacterCardProps {
  name: string;
  image: string;
  status: string;
  id: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, image, status, id }) => {
  return (
    <Link
      to={`/character/${id}`}
      className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
    >
      <img
        className="object-cover w-full h-56"
        src={image || 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
        alt="Rick and Morty character"
      />

      <div className="py-5 text-center">
        <div className="block text-xl font-bold text-gray-800 dark:text-white">{name}</div>
        <span className="text-sm text-gray-700 dark:text-gray-200">{status}</span>
      </div>
    </Link>
  );
};

export default CharacterCard;

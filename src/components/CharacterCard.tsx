import React from 'react';

interface CharacterCardProps {
  name: string;
  imageUrl: string;
  status: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, imageUrl, status }) => {
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover w-full h-56"
        src={imageUrl || 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
        alt=""
      />

      <div className="py-5 text-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
          role="link"
        >
          {name}
        </a>
        <span className="text-sm text-gray-700 dark:text-gray-200">{status}</span>
      </div>
    </div>
  );
};

export default CharacterCard;

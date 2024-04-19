import React from 'react';

const CharacterCard = () => {
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover w-full h-56"
        src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        alt=""
      />

      <div className="py-5 text-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
          role="link"
        >
          Commander Rick
        </a>
        <span className="text-sm text-gray-700 dark:text-gray-200">Human Dead</span>
      </div>
    </div>
  );
};

export default CharacterCard;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { Character } from '../types/types';

const CharacterDetail: React.FC = () => {
  const { id } = useParams();
  // const [character, setCharacter] = useState<Character | null>(null);

  return (
    <div>
      CharacterDetail
      {id}
    </div>
  );
};

export default CharacterDetail;

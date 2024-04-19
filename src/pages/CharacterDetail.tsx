import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Character } from '../types/types';
import LoadingComponent from '../components/Loading';
import useQuery from '../hooks/useQuery';
import ErrorComponent from '../components/Error';
import { API_URL_CHARACTER } from '../utils/constant';

const CharacterDetails: React.FC = () => {
  const { id } = useParams();
  const { data: character, error, loading } = useQuery<Character>(`${API_URL_CHARACTER}/${id}`);

  if (error)
    return (
      <ErrorComponent
        message="Character details not found. Please try again."
        NoRefresh
      />
    );

  if (!character || loading) return <LoadingComponent />;

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-lg mx-auto bg-white text-slate-700 rounded-lg overflow-hidden shadow-md">
        <img
          className="w-full"
          src={character.image}
          alt={character.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{character.name}</div>
          <p>
            <span className="font-semibold">Status:</span> {character.status}
          </p>
          <p>
            <span className="font-semibold">Species:</span> {character.species}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {character.gender}
          </p>
          <p>
            <span className="font-semibold">Origin:</span> {character.origin.name}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {character.location.name}
          </p>
          <div className="mt-4">
            <Link
              to="/"
              className="bg-gray-800 text-white py-2 px-4 rounded"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;

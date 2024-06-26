import React from 'react';

const ErrorComponent: React.FC<{ message: string; onRefresh?: () => void; NoRefresh?: boolean }> = ({
  message,
  onRefresh,
  NoRefresh,
}) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/65.jpeg"
          alt="Error"
        />
      </div>
      {message || 'Character not found. Please try again.'}
      {!NoRefresh && (
        <div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={onRefresh}
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorComponent;

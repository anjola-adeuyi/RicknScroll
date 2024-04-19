import React from 'react';

const ErrorComponent: React.FC<{ message: string; onRefresh: () => void }> = ({ message, onRefresh }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      {message || 'Character not found. Please try again.'}
      <div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={onRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;

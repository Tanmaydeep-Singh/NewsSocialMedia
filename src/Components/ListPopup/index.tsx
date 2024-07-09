import React, { useState } from 'react';

interface User {
  id: number;
  username: string;
  avatar: string;
}

interface PopupProps {
  title: string;
  users: User[];
  onClose: () => void;
}

const Popup = ({ title, users, onClose } : PopupProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src={user.avatar}
                alt={user.username}
              />
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;

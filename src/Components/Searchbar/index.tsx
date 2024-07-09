import React, { useState } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false); // To toggle search results visibility

  const debouncedSearch = debounce((term: string) => {
    if (term.trim() !== '') {
      fetchUsers(term);
    } else {
      setSearchResults([]);
      setShowResults(false); // Hide results if search term is empty
    }
  }, 300); // 300ms debounce time

  const fetchUsers = async (term: string) => {
    try {
      // Simulated API call; replace with actual API endpoint
      const response = await axios.get<User[]>(`/api/users?search=${term}`);
      setSearchResults(response.data);
      setShowResults(true); // Show results after fetching data
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <div className="relative mt-4 w-full max-w-md mx-auto">
      <input
        type="text"
        className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md p-2 pl-8 w-full shadow-sm bg-white text-black"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showResults && (
        <ul className="absolute bg-white rounded-lg border border-gray-300 shadow-lg mt-1 w-full">
          {searchResults.map((user) => (
            <li
              key={user.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

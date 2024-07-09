import React, { useState, useEffect } from 'react';
import SearchBar from '../../Components/Searchbar';

// Define types for the data structures
interface Post {
  id: number;
  content: string;
  timestamp: string;
}

interface User {
  id: number;
  username: string;
  avatar: string;
  posts: Post[];
}

const followedUsers: User[] = [
  {
    id: 1,
    username: 'john_doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    posts: [
      {
        id: 1,
        content: "Hello world! This is my first post. #excited",
        timestamp: "1 hour ago",
      },
      {
        id: 2,
        content: "Just finished a great coding session. Feeling awesome! 💻",
        timestamp: "2 hours ago",
      },
    ],
  },
  {
    id: 2,
    username: 'jane_smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    posts: [
      {
        id: 3,
        content: "Enjoying the sunny day outside ☀️ #nature",
        timestamp: "3 hours ago",
      },
    ],
  },
];

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const allPosts: Post[] = followedUsers.flatMap(user => user.posts);
      setPosts(allPosts);
    }, 1000); // Simulating delay
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
            <SearchBar />

      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Home</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={followedUsers.find(user => user.posts.some(p => p.id === post.id))?.avatar}
                  alt="Avatar"
                />
                <div>
                  <p className="font-semibold">{followedUsers.find(user => user.posts.some(p => p.id === post.id))?.username}</p>
                  <p className="text-gray-500 text-sm">{post.timestamp}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

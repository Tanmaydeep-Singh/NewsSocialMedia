import React from 'react';

// Define types for props and state
interface Post {
  id: number;
  content: string;
  timestamp: string;
}

const Post= () => {

    const posts: Post[] = [
    {
      id: 1,
      content: "Excited to start using Tailwind CSS on my new project! 😊 #webdev",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      content: "Just learned a new React hook today. Feeling productive! 💪",
      timestamp: "1 day ago",
    },
  ];

  return (
    <div className="space-y-4">
    {posts.map((post) => (
      <div key={post.id} className="border p-4 rounded-lg text-azure-500">
        <p >{post.content}</p>
        <p className=" text-azure-500 text-sm mt-2">{post.timestamp}</p>
      </div>
    ))}
  </div>

  );
};

export default Post;

import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define types for props and state if necessary

const Profile = () => {
  // Sample data for posts
  const navigate = useNavigate();

  const posts = [
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

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');

  };

  return (
  

    <div className=" min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-md p-4    min-h-screen rounded-lg shadow-md p-8 space-y-6">
      {/* LOGOUT BUTTON */}
      {/* <div className="mt-6 flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none"
          >
            Logout
          </button>
        </div> */}

        <div className="flex items-center space-x-4">
          <img
            className="w-20 h-20 rounded-full"
            src="https://randomuser.me/api/portraits/women/27.jpg"
            alt="Avatar"
          />
          <div>
            <h1 className="text-xl font-semibold">Jane Doe</h1>
            <p className="text-azure-300">@janedoe</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Bio</h2>
          <p className="text-azure-500 mt-2">
            Software engineer passionate about web development. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Followers & Following</h2>
          <div className="flex mt-2">
            <div className="mr-8">
              <p className="font-semibold">Followers</p>
              <p>1000</p>
            </div>
            <div>
              <p className="font-semibold">Following</p>
              <p>500</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Recent Posts</h2>
          <div className="space-y-4 mt-4">
            {posts.map((post) => (
              <div key={post.id} className="border p-4 rounded-lg">
                <p className="text-azure-500">{post.content}</p>
                <p className="text-azure-500 text-sm mt-2">{post.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Nice, now you are loged in</h1>
      <button
        onClick={handleSignOut}
        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;

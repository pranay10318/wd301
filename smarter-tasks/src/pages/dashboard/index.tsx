import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const handleOnclick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      localStorage.removeItem("userData");
      localStorage.removeItem("authToken");
      navigate("/signin");
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const { name, email } = userData;

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1>
        <button
          id="logout-link"
          onClick={handleOnclick}
          className="text-2xl font-bold text-center ml-5 bg-slate-400 rounded text-red-800 mb-8"
        >
          LOGOUT
        </button>
      </div>
      <div>
        <h2>Email: {email}</h2>
        <h2>Name: {name}</h2>
      </div>
    </div>
  );
};

export default Dashboard;

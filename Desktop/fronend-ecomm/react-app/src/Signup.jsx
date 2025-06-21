import React, { useContext, useState } from 'react';
import image from './assets/image.png';
import { ClothesContext } from './Context/ClothesContext';
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const { users, setusers } = useContext(ClothesContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const signupHandler = () => {
    console.log("signup button clicked")
    const emailExists = users.find((user) => user.email === email);
    if (emailExists) {
      alert("Email already exists!");
      return;
    }

    const newUser = {
      username,
      email,
      contact,
      password
    };

    // Add new user to context state
    setusers([...users, newUser]);

    alert("Account created successfully!");
    navigate('/login'); // or '/' if you want to auto-login
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-300 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <img src={image} alt="mountain" className="mx-auto w-2xl h-30" />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Sign Up</h1>
        </div>

        <h5 className="text-sm text-gray-500 mt-2">
            Have an account? <button onClick={()=>navigate('/login')} className="text-blue-500 underline">Log in</button>
        </h5>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={signupHandler}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

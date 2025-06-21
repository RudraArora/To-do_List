import React, { useContext, useState } from 'react';
import image from './assets/image.png';
import { ClothesContext } from './Context/ClothesContext';
import { useNavigate } from "react-router"


const Login = () => {

    const navigate = useNavigate()

    const {users, emailBool, setemailBool, pwdBool, setpwdBool} = useContext(ClothesContext)
    
    const[email, setemail] = useState('')
    const[pwd, setpwd] = useState('')

    const loginHandler = () => {

        const foundUser = users.find((item) => item.email === email && item.password === pwd)

        if (foundUser) {
            setemailBool(1)
            setpwdBool(1)
            alert('Welcome to Rudra Store')
            navigate('/')
            
        }
        else {
            setemailBool(0);
            setpwdBool(0);
            alert("Invalid credentials");
        }

    }
    
    


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-300 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <img src={image} alt="mountain" className="mx-auto w-2xl h-30" />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Log in</h1>
          <h5 className="text-sm text-gray-500 mt-2">
            Don’t have an account? <button onClick={()=>navigate('/signup')} className="text-blue-500 underline">Sign up</button>
          </h5>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            id="pwd"
            placeholder="Enter your password"
            value={pwd}
            onChange={(e)=>setpwd(e.target.value)}
            className="w-full px-4 py-2 border  border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            id="btn"
            onClick={loginHandler}
            className=" w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

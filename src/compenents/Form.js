
import React, { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import img from "../images/top5.jpeg";
import Nav2 from "./Nav2";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login/', {
          username: username,
          password: password
        });
        const token = response.data.access_token; // Retrieve the token from the response data


        const user_type = response.data.user_type;
        const id = response.data.id;

        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('type', user_type);
        localStorage.setItem('username', username);

  if (user_type === 'admin') {
    navigate(`/Admin`); 
  } else if (user_type === 'utilisateur') {
    navigate(`/User/${username}`); 
  } else {
    navigate(`/Moderateur`); 
  }
      } catch (error) {
        console.error(error);
        alert ('Please Verify your informations');
      
    }
    };
return ( 
    <>
    <div className='sticky-navbar'>
        <Nav2 />
    </div>
    <div className='container mx-auto'>
        <div className='flex w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
            <div className="w-1/2 p-4 rounded-3xl">
                <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className='w-1/2 py-16 px-12'>
                <h1 className='text-5xl font-semibold'>Bienvenue!!</h1>
                <p className='font-medium text-lg text-gray-950 mt-4'>Entrez vos informations!</p>
                <div className='mt-9'>
                    <div>
                        <label className='text-lg font-medium'>
                            Nom d'utilisateur
                        </label>
                        <input
                            className='w-full border-2 border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
                            onChange={handleUsernameChange}
                            value={username}
                            placeholder="Entrez votre Nom d'utilisateur"
                            type='text'
                        />
                    </div>
                    <div>
                        <label className='text-lg font-medium'>
                            Mot de passe
                        </label>
                        <input
                            className='w-full border-2 border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrez votre mot de passe'
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button className='font-medium underline mt-5 text-base text-violet-400'>Mot de passe oublié?</button>
                    <div className='mt-5 flex flex-col gap-y-4'>
                        <button
                            className='active:scale-95 active:duration-75 transition-all hover:scale-{1.01} ease-in-out py-4 rounded-xl bg-violet-500 text-white text-lg font-bold'
                            onClick={handleLogin}>Connexion
                        </button>
                    </div>
                    <p>
                        Vous n'avez pas de compte ?{' '}
                        <Link to='/Inscr' className='font-medium underline mt-5 text-base text-violet-400'>
                            Inscrivez-vous ici!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</>
);
}
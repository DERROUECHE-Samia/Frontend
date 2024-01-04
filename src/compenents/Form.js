
import React, { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import img from "../images/top5.jpeg";


export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
  
    const handleLogin = async () => {
      try {
        console.log("Logging in with:", { username, password });
    
        const response = await fetch("http://127.0.0.1:8000/api/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          alert("Login successful:");
          // Update state or context with the received data
        } else {
          const errorData = await response.json();
          console.error("Login error:", errorData);
          alert("Login error:");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Error during login:");
      }
    };

return ( 



<div className= 'container mx-auto'>
  <div className=' flex w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>

<div className = 'w-1/2 py-16 px-12 '>
<h1 className='text-5xl  font-semibold'> Bienvenu!! </h1>
    <p className='font-medium  text-lg text-gray-950 mt-4'> Entrez vos informations!</p>


    <div className='mt-9 '>
        <div>
            <label className='text-lg font-medium'>
            Nom d'utilisateur 
            </label>
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
            onChange={handleUsernameChange}
            value={username}
            placeholder=  "Entrez votre Nom d'utilisateur  "
            type = 'text'
            />
        </div>



        <div>
            <label className='text-lg font-medium'>
           Password  
           </label>
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
            placeholder=' Entrez votre mot de passe '
            type='password'
            value={password}
            onChange={handlePasswordChange}          
            />
        </div>

        <button
            className="font-medium underline mt-5 text-base text-violet-400"
          >
            Mot de passe oublié?
          </button>

<div className='mt-5 flex flex-col gap-y-4'>
<button className= ' active:scale-95 active:duration-75 transition-all hover:scale-{1.01} ease-in-out py-4 rounded-xl  bg-violet-500 text-white  text-lg  font-bold ' onClick={handleLogin}> Connexion </button>
</div>

<p> Vous n'avez pas de compte ? <button className='font-medium underline mt-5 text-base text-violet-400'> Inscrire!</button> 
</p>


    </div  >
    </div >





<div className='w-1/2 p-5 rounded-2xl' >
  <img src = {img} alt='' />
</div>



  </div>  
</div>


)

}
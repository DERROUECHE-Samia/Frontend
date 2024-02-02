import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AjouterModerateur() {
  const [modal, setModal] = useState(true);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    if(username.length==0 || firstName.length==0 || lastName.length==0 || email.length==0 || password==0)
    {
        alert('veuillez remplir tous les champs');
    }
    else{
    try {
      const response = await fetch('http://127.0.0.1:8000/api/moderateur/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user:{
                email: email,
                password: password,
                username: username,
            },
          
          first_name: firstName,
          last_name: lastName,
         
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User created successfully');
        alert('Moderateur créé avec succès');
        // Additional logic after successful user creation
      } else {
        console.error('Failed to create user:', data.detail);
        alert('Erreur lors de la création de l\'utilisateur');
        // Handle error, display message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle unexpected errors
    } finally {
      setModal(false);
      // Reset the input fields
      setUsername("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
}
  };
  const handle =()=>
  {
    window.location.reload();
  }
  return (
    <>
      
        <div >
          <div onClick={() => setModal(false)} className="overlay"></div>
          <div className="modal-content w-300 mt-40 mx-auto bg-white rounded-lg shadow-lg">
            <button className='absolute top-2 right-2 text-lg' onClick={handle}>
              &times;
            </button>
            <p className="font-bold text-2xl pb-4">Créer un modérateur</p>
            <div className="py-4 px-8">
              <div className='mt-4'>
                <div>
                  <label className='text-lg font-medium'>
                    Nom d'utilisateur
                  </label>
                  <input 
                    className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1 bg-transparent'
                    placeholder='Entrez le nom d utilisateur'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className='text-lg font-medium'>
                    Prénom
                  </label>
                  <input 
                    className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1 bg-transparent'
                    placeholder='Entrez le prénom'
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className='text-lg font-medium'>
                    Nom de famille
                  </label>
                  <input 
                    className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1 bg-transparent'
                    placeholder='Entrez le nom de famille'
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className='text-lg font-medium'>
                    Email
                  </label>
                  <input 
                    className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1 bg-transparent'
                    placeholder='Entrez l email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className='text-lg font-medium'>
                    Mot de passe
                  </label>
                  <input 
                    className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1 bg-transparent'
                    placeholder='Entrez le mot de passe'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='mt-5'>
                  <button 
                    onClick={createUser}
                    className='active:scale-95 active:duration-75 transition-all hover:scale-101 ease-in-out py-2 rounded-xl bg-indigo-600 text-white text-lg font-bold w-full'
                  >
                    Créer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

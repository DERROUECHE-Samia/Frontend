import React, { useState } from 'react';
import NavAdmin from './NavAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';



const Pageadmin = () => {
  const [showForm, setShowForm] = useState(false);
  const [moderators, setModerators] = useState([]); // Array to store all moderators
  const [moderatorInfo, setModeratorInfo] = useState({
    nom: '' ,
    email: '' ,

  });

  const handleAddModeratorClick = () => {
    setShowForm(!showForm);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (e) => {
  e.preventDefault();

  // Check if any of the form fields are empty
  if (!moderatorInfo.nom || !moderatorInfo.email) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  const existingModeratorIndex = moderators.findIndex((mod) => mod.email === moderatorInfo.email);

  if (existingModeratorIndex !== -1) {
    moderators[existingModeratorIndex] = moderatorInfo;
    setModerators([...moderators]);
  } else {
    setModerators([...moderators, moderatorInfo]);
  }

  setModeratorInfo({
    nom: '',
    email: '',
  });

  setShowForm(false);
};



  const handleModifierClick = (index) => {
    const moderatorToEdit = moderators[index];
    // Set the form fields with the moderator's information
    setModeratorInfo({
      nom: moderatorToEdit.nom,
      email: moderatorToEdit.email,
    });
    setShowForm(true); // Show the form for editing
  };


  const handleSupprimerClick = (index) => {
    const updatedModerators = [...moderators];
    updatedModerators.splice(index, 1);
    setModerators(updatedModerators);
  };


  return (
    <div>
    <NavAdmin user={{ name: 'derr', fullName: 'John Doe' , mail:'john@gmail.com'}}/>

      <div className='mt-5 flex flex-col gap-y-4'>
        <button
          className='mt-10 ml-auto mr-auto w-80 mx-auto rounded-3xl active:scale-95 
          active:duration-75 transition-all hover:scale-1.01 ease-in-out py-4
          bg-violet-500 text-white text-lg font-bold'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className='w-6 h-6 inline-block mr-2'
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Télécharger un article
        </button>
      </div>

      <div>
        <button
          className='mt-10 ml-auto mr-auto w-80 mx-auto rounded-3xl active:scale-95 
          active:duration-75 transition-all hover:scale-1.01 ease-in-out py-4
          bg-violet-500 text-white text-lg font-bold'
          onClick={handleAddModeratorClick}
        >
          <span className='mr-2'>
            <FontAwesomeIcon icon={faUserPlus} />
          </span>
          Ajouter un modérateur
        </button>

        {showForm && (
          <div className='flex items-center justify-center h-screen'>
            <div className='flex bg-white rounded-xl shadow-lg overflow-hidden w-1/2'>
              <div className='bg-transparent p-8 rounded-2xl relative'>
                <button className='absolute top-2 right-2 text-lg' onClick={handleFormClose}>
                  &times;
                </button>

                <form onSubmit={handleFormSubmit}>
                  <label htmlFor='nom'> Nom & Prénom :</label>
                  <input
                    name='nom'
                    className='w-full border-2 border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
                    placeholder='Nom modérateur'
                    type='text'
                    value={moderatorInfo.nom}
                    onChange={(e) => setModeratorInfo({ ...moderatorInfo, nom: e.target.value })}
                  />

                  <label htmlFor='Email'> Email :</label>
                  <input
                    name='Email'
                    className='mt-3 w-full border-2 border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
                    placeholder='Email modérateur'
                    type='email'
                    value={moderatorInfo.email}
                    onChange={(e) => setModeratorInfo({ ...moderatorInfo, email: e.target.value })}
                  />

                  <label htmlFor='password'> Mot de passe :</label>
                  <input
                    name='password'
                    className='w-full border-2 border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
                    placeholder='Mot de passe'
                    type='password'
                   
                  />

                  <button
                    type='submit'
                    className='mt-10  border-gray-400 bg-ffd1ce ml-3 mr-3 w-60 mx-auto rounded-2xl active:scale-95 active:duration-75 ease-in-out py-2 text-white text-lg font-bold'
                  >
                    <span className='mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>
                    Valider
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
          {moderators.length > 0 && (
        <div className='mt-5 bg-white rounded-2xl p-4 shadow-lg w-1/2 mx-auto '>
          <h2 className='mt-0 mx-auto text-lg font-bold'> Informations des modérateurs ajoutés :</h2>
          {moderators.map((moderator, index) => (  
            <div key={index} className='flex items-center justify-between'>
              <div>
                {/* Moderator information */}
                <p className='mt-4'>
                  <strong>Nom & Prénom:</strong> {moderator.nom}
                </p>
                <p className='mb-3'>
                  <strong>Email:</strong> {moderator.email}
                </p>
              </div>
              {/* Edit and Delete icons */}
              <div>
                <FontAwesomeIcon
                  icon={faEdit}
                  className='cursor-pointer text-black mr-3'
                  onClick={() => handleModifierClick(index)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className='cursor-pointer text-black'
                  onClick={() => handleSupprimerClick(index)}
                />
              </div>
              <hr className='my-3' />
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Pageadmin;
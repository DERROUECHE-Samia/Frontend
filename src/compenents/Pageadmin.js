import React, { useState ,useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Nav1 from "./Nav1"
import AjouterModerateur from './AjouterModerateur';
import AjouterArticle from './AjouterArticle';
import {useParams } from 'react-router-dom';

/**
 * Composant de la page d'admin.
 * @component
 */

const Pageadmin = () => {
  
  const [showForm, setShowForm] = useState(false);
  const type=localStorage.getItem('type');
  const [showAjoutArticle,setAjoutArticle]=useState();
  const navigate = useNavigate();
  const params = useParams();
  const { typ} = params;

  useEffect(() => {
    fetchModerators();
    fetchArticles();
  }, []);
  const handleEditModerateur = async (id,index)=>{
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/${type}/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username===u ?"None":username,
          email: email,
        },
        first_name: firstName,
        family_name: familyName,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('information changed successfully');
      alert ('Succées');
      window.location.reload()
      // Additional logic after successful password change
    } else {
      alert (`erreur`);
      console.error('error:', data.detail);
      // Handle error, display message, etc.
    } 
    } catch (error) {
      console.error('Error creating user:', error);
      alert('erreur');
    }
 
  };
  const handleDeleteModerator = async (id, index) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/moderateur/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the moderator from the local state
        const updatedModerators = [...moderators];
        updatedModerators.splice(index, 1);
        setModerators(updatedModerators);
        alert("Moderateur supprimé avec succès");
      } else {
        console.error('Failed to delete moderator:', response.statusText);
        alert("Erreur lors de la suppression du modérateur");
      }
    } catch (error) {
      console.error('Error deleting moderator:', error);
      alert("Erreur lors de la suppression du modérateur");
    }
  };
  const handleDelete= async (moId,UserId,index)=>{
    handleDeleteModerator(moId,index);
    handleDeleteUser(UserId,index);
  }
  const handleDeleteUser = async (userId, index) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/user/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the user from the local state
      } else {
        console.error('Failed to delete user:', response.statusText);
        alert("Erreur lors de la suppression de l'utilisateur");
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert("Erreur lors de la suppression de l'utilisateur");
    }
  };
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState("");  
  const [familyName, setFamilyName] = useState("");
  const [articles, setArticles] = useState("");

  const handleUsernameChange = async (e) => {
      const newUsername = e.target.value;
      setUsername(newUsername);
  };
  const UpdateInfo = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/moderateur/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: username === u ? "None" : username,
            email: email,
          },
          first_name: firstName,
          family_name: familyName,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Information changed successfully');
        alert('Succès');
        navigate(`/home/admin`);
      } else {
        console.error('Error:', data.detail);
        alert('Erreur');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erreur');
    } finally {
      // This part should only execute if there's no navigation in the try block
    }
  };
  
  const handleEmailChange = async (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
  };
  useEffect(() => {
    const isUserSignedIn = () => {
      const token = localStorage.getItem('token');
      return !!token;
    };

    if (!isUserSignedIn()) {
      navigate('/login'); 
    } else {
      if (type !== 'admin') {
        navigate('/unauthorized');
      }
    }

  
  }, [typ,navigate]);

  const handlefirstNameChange = (e) => {
      const newFirstName = e.target.value;
      setFirstName(newFirstName);
  };
  
  const handlefamilyNameChange = (e) => {
      const newFamilyName = e.target.value;
      setFamilyName(newFamilyName);
  };
  
  const fetchModerators = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/moderateur/');
      const data = await response.json();
      setModerators(data); 
    } catch (error) {
      console.error('Error fetching moderators:', error);
    }
  };
  const fetchArticles = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/search/');
      const data = await response.json();
      setArticles(data); 
    } catch (error) {
      console.error('Error fetching moderators:', error);
    }
  };
  const [moderators, setModerators] = useState({
    user: {
      id: '',
      username: '',
      email: ''
    },
    first_name: '',
    family_name: ''
  });
  const handleAddModeratorClick = () => {
    setShowForm(!showForm);
  };
   const [u,setU]=useState();

  const handleChange = (moderateur, index) => {
    setEmail(moderateur.user.email);
    setU(moderateur.user.username);
    setFamilyName(moderateur.family_name);
    setFirstName(moderateur.first_name);
    setUsername(moderateur.user.username);
    setS(index);
};

const [S,setS]=useState(-1);


  return (
    <div>
      <Nav1/>
      <div className='flex mt-20'>
        <div className='flex-1 p-4'>
          <button
            className='w-full mb-4 max-h-[60px] rounded-3xl active:scale-95 
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
            <AjouterModerateur/>
          )}
                  {showAjoutArticle && (
            <AjouterArticle/>
          )}  
          {moderators.length > 0 ? (
  <div className='mt-5 bg-white rounded-2xl p-4 shadow-lg w-full'>
    <h2 className='mt-0 mx-auto text-lg font-bold'> Informations des modérateurs ajoutés :</h2>
    <ul className="divide-y divide-gray-200">
    {moderators.map((moderator, index) => (
    <li key={index} className="py-4 flex items-center justify-between">
        <div>
            {S === index ? (
                <div>
                    <p className='mt-4'>
                        <strong>Moderateur {index +1}: <input
                            type='text'
                            value={firstName}
                            onChange={handlefirstNameChange}
                        />
                        <input
                            type='text'
                            value={familyName}
                            onChange={handlefamilyNameChange}
                        /></strong>
                    </p>
                    <p className='mt-4'>
                        <strong>Nom d'utilisateur:</strong> <input
                            type='text'
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </p>
                    <p className='mb-3'>
                        <strong>Email:</strong> <input
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </p>
                </div>
            ) : (
                <div>
                    <p className='mt-4'>
                        <strong>Moderateur {index + 1}: {moderator.first_name} {moderator.family_name}</strong>
                    </p>
                    <p className='mt-4'>
                        <strong>Nom d'utilisateur:</strong> {moderator?.user?.username}
                    </p>
                    <p className='mb-3'>
                        <strong>Email:</strong> {moderator?.user?.email}
                    </p>
                </div>
            )}
        </div>
        <div>
        {S === index ? (
    <button onClick={()=>UpdateInfo(moderator.id)}>Save</button>
) : (
    <>
        <FontAwesomeIcon
            icon={faEdit}
            className='cursor-pointer text-black mr-3'
            onClick={() => handleChange(moderator,index)} // Set S to the index of the moderator being edited
        />
        <FontAwesomeIcon
            icon={faTrash}
            className='cursor-pointer text-black'
            onClick={() => handleDelete(moderator.id, moderator.user.id, index)}
        />
    </>
)}

        </div>
    </li>
))}
    </ul>
  </div>
):(<div className='mt-5 bg-white rounded-2xl p-4 shadow-lg w-full'>
<h2 className='mt-0 mx-auto text-lg font-bold'> Aucun moderateur:</h2></div>)}

        </div>

        <div className='flex-1 p-4'>
          <div className='flex flex-col gap-y-4'>
           
              <button
                className='w-full mb-4 max-h-[60px] rounded-3xl active:scale-95 
              active:duration-75 transition-all hover:scale-1.01 ease-in-out py-4
              bg-violet-500 text-white text-lg font-bold'
                onClick={()=>setAjoutArticle(true)} // Éviter que le clic du bouton ne déclenche le lien immédiatement
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6 inline-block mr-2'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                </svg>
                Télécharger un article
              </button>
              {articles.length > 0 ? (
    <div className='mt-5 bg-white rounded-2xl p-4 shadow-lg w-full'>
        <h2 className='mt-0 mx-auto text-lg font-bold'> les articles :</h2>
        <ul className="divide-y divide-gray-200">
            {articles.map((article, index) => (
                <li key={index} className="py-4 flex items-center justify-between">
                    <div>
                        <div>

                            <p className='mt-4'> <a href={article.pdf_url} target="_blank" rel="noopener noreferrer">{article.title}</a></p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
) : (
    <div className='mt-5 bg-white rounded-2xl p-4 shadow-lg w-full'>
        <h2 className='mt-0 mx-auto text-lg font-bold'> Aucun Article:</h2>
    </div>
)}

            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Pageadmin;
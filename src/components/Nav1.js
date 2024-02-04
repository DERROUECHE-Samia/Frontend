import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * Composant représentant la section "Rencontrer Notre Équipe".
 * @component
 *
 * @returns {JSX.Element} - Élément React représentant la section.
 */


/*
const Nav1 = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState();
  const handleCircleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    console.log("Déconnexion...");
  };

  return (
    <nav className="bg-indigo-200 p-4 flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-black mr-1 pt-2">
            <ion-icon name="bug"></ion-icon>
          </span>  
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block">Designer</span>
            
            <a href="/profile" className="text-white hover:text-pink-300">
              Mon Profil
            </a>
            <a
              href="/favorites"
              className="text-pink-700 hover:text-pink-300 font-[Kanit]"
            >
              Mes Favoris
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 md:mt-0 relative font-[Poppins]">
        {user && (
          <div >
          <div className="flex items-center mb-2 pb-4 mt-4">
          <div>
                    <p className="font-bold text-indigo-800">{user.fullName}</p>
                    <p className="text-indigo-800">{user.name}</p>
                  </div>
          <div
              className="bg-white border-indigo-800 rounded-full h-10 w-10 flex items-center justify-center text-indigo-800 font-bold ml-4 cursor-pointer"
              onClick={handleCircleClick}
          >
              {user.name.charAt(0).toUpperCase()}
            </div>
                 
                </div>
            
            
            {showMenu && user.name && (
  <div className="absolute bg-indigo-800 border border-indigo-800 p-4 rounded-md mt-1 z-10  pb-12 " 
       style={{ left: "-120px", width: "200px" }}>
    <div className="flex items-center mb-2 pb-4 ">
                  <div className="bg-white border-white rounded-full h-8 w-8 flex items-center justify-center text-indigo-700 font-bold mr-2">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-white">{user.fullName}</p>
                    <p className="text-white" >{user.name}</p>
                  </div>
      </div>
    <a href="/settings" className="text-white font-serif hover:underline block mb-2">
      Paramètres du compte
    </a>
    <button onClick={handleLogout} className="text-white font-serif hover:underline block">
      Se déconnecter
    </button>
  </div>
)}
            
          </div>
        )}
      </div>
    </nav>
  );
}
*/
import { useEffect } from 'react';

const Nav1 = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const username = localStorage.getItem('username');
  const id = localStorage.getItem('id');
  const type= localStorage.getItem('type');
  const token=localStorage.getItem('token');
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/${type}/${id}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    }, [type,id]);
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  const GoToProfile = () => {
    navigate(`/${type}/${username}`)
  };
  const LogOut= () => {
    localStorage.removeItem('id');
    localStorage.removeItem('id_user');
    localStorage.removeItem('type');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
    /*
    try {
      const response = axios.post('http://127.0.0.1:8000/api/logout/', {
        refresh_token: token
      });
      return response.data;
    
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
    */
  };
  const handleNavigate = () => {
    navigate(`/home/${type}`); 
  };
 

  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-blue-900 text-white'>
  <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
    <div className='flex items-center font-bold text-2xl cursor-pointer font-[Poppins]'>
      <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="bug"></ion-icon>
      </span>
        RTcleByte
        <span className='md:ml-8 text-xl md:my-0 my-7 '>

             
    <button onClick={handleNavigate}>Acceuil</button>
    
    </span>
  {type == 'utilisateur' && (
    <span className='md:ml-8 text-xl md:my-0 my-7 '>
      <Link to='/favoris'>Mes Favoris</Link>
    </span>
  )}
    </div>
        <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}
      >
        <Link onClick={handleDropdownClick}>{localStorage.getItem('username')}</Link>
      </ul>
      {showDropdown && (
        <div className="absolute bg-white shadow-lg p-6 rounded-md mt-1 z-10 pb-12 flex flex-col items-center justify-center" style={{ right: "0px", top: "75px", width: "180px" }}>
        <div className="flex items-center mb-4">
          <div>
            <p className="font-bold text-black">{userData.first_name} {userData.family_name}</p>
          </div>
        </div>
        <button  onClick={GoToProfile} className="text-black font-serif hover:underline block mb-2" >
          Paramètres du compte
        </button>
        <button onClick={LogOut} className="text-black font-serif hover:underline block mb-2">
          Se déconnecter
        </button>
      </div>
      )}
      
    </div>
    </div>
  );
  }
export default Nav1;
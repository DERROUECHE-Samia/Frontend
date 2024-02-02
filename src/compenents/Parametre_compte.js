import React, { useState,useEffect } from "react";
import Button from "./Button";
import Nav1 from "./Nav1";
import "./Modal.css";
import {useNavigate } from 'react-router-dom';
import {useParams } from 'react-router-dom';

import axios from 'axios';
import ChangePassword from './ChangePassword';

/**
 * Composant des paramètres du compte.
 * @param {Object} user - Les informations de l'utilisateur.
 * @returns {JSX.Element} Composant React.
 */

const Parmetres = ({ user }) => {

  const [userData, setUserData] = useState(null);
  const id = localStorage.getItem('id');
  const type = localStorage.getItem('type');
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState("");  
  const [familyName, setFamilyName] = useState("");  
  const [modal, setModal] = useState(false);
  const [e,sete]=useState('');
  const [u,setu]=useState('');
  const [changebutton, setChangebutton] = useState(false);

  const[isUsernameTaken,setIsUsernameTaken]=useState('');
  const[isEmailTaken,setIsEmailTaken]=useState('');

  const params = useParams();
  const { typ, usern } = params;

  // Example of checking if typ and usern match certain values
  const isCorrectUser = typ === 'desiredType' && usern === 'desiredUsername';


  const handleEmailChange = async (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };


const ConfirmUsername = async (newUsername) => { // Pass 'newUsername' as a parameter
  try {
    if(u==newUsername)
    {
      return ;
    }
    const response = await axios.post('http://127.0.0.1:8000/api/check_username/', { username: newUsername });
    setIsUsernameTaken(response.data.is_taken);
  } catch (error) {
    console.error('Error checking username:', error);
  }
};
const handleUsernameChange = async (e) => {
  const newUsername = e.target.value;
  setUsername(newUsername);
  await ConfirmUsername(newUsername);  // Add 'await' here
};
  const handlefirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
  };
  const handlefamilyNameChange = (e) => {
    const newFamilyName = e.target.value;
    setFamilyName(newFamilyName);
  };
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(true);
  };
  const handlechange= () => {
    setChangebutton(!changebutton);
  };


  const UpdateInfo= async () => {

    if (
      username.trim().length === 0 ||familyName.trim().length === 0 ||firstName.trim().length === 0 ||email.trim().length === 0 ) {
      alert("Veuillez remplir tous les champs");
      return;
    }
   
    if (isEmailTaken) {
      alert("Email déjà pris");
    }

    if (isUsernameTaken) {
      alert("Nom d'utilisateur déjà pris");
    }
    if(!isUsernameTaken && !isEmailTaken )
    {
    
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
      console.error('Error:', error);
    } finally {
      localStorage.setItem('username',username);
     navigate(`/${type}/${userData.username}`);
    }
  }
  };

  const handlePasswordChange = async (oldPassword, newPassword,) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/change-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
          id:userData.user.id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Password changed successfully');
        // Additional logic after successful password change
      } else {
        console.error('Failed to change password:', data.detail);
        // Handle error, display message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle unexpected errors
    }
  };

  const fetchData = () => {
    fetch(`http://127.0.0.1:8000/api/${type}/${id}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        localStorage.setItem('id_user',data.user.id);
        setEmail(data.user.email);
        setUsername(data.user.username);
        setFamilyName(data.family_name);
        setFirstName(data.first_name);
        sete(data.user.email);
        setu(data.user.username);
        })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };

  useEffect(() => {
    // Check if the user is signed in
    const isUserSignedIn = () => {
      const token = localStorage.getItem('token');
      return !!token;
    };

    // Redirect to login if the user is not signed in
    if (!isUserSignedIn()) {
      navigate('/login'); // Change '/login' to your login page route
    }

    // Get the username of the currently logged-in user
    const loggedInUsername = localStorage.getItem('username');

    // Redirect the user to the login page if they are not signed in
    if (!isUserSignedIn()) {
      navigate('/login');
    } else {
      // Check if the username from the URL matches the signed-in user's username
      if (usern !== loggedInUsername || typ !== type) {
        navigate('/unauthorized');
      }
    }

    fetchData(); // Call your fetchData function here
  
  }, [typ, usern, navigate]);

  return (
    <>
    
      <div>
        <Nav1 />
      </div>
     
    
        <div className="ml-28 mt-28">
          <p className="font-bold text-2xl pb-4">Paramètres du compte</p>
          <div className="border shadow-lg p-12 mr-96">
            <div className="flex mb-2 pb-4">
              <div className="pl-6 pt-6">
              <div className="flex items-center">
              <div className="flex items-center">
  <p className="pr-2 font-bold text-xl">Nom d'utilisateur: </p>
 
</div>
                  {changebutton ? (
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="md:ml-8 text-xl md:my-0 my-7"/>):
                    (
                      <p className="md:ml-8 text-xl md:my-0 my-7">{username}</p>

                      )
                  }
                  
                </div>
                <div className="flex items-center">
                  <p className="pr-2 font-bold text-xl">Nom: </p>
                  {changebutton ? (
                    <input
                      type="text"
                      name="fullName"
                      value={familyName}
                      onChange={handlefamilyNameChange}
                      className="md:ml-8 text-xl md:my-0 my-7"
                    />
                  ) : (
                    <p className="md:ml-8 text-xl md:my-0 my-7">{familyName}</p>
                  )}
                </div>

                <div className="flex items-center pt-4">
                  <p className="pr-2 font-bold text-xl">Prénom: </p>
                  {changebutton ? (
                  <input
                    type="text"
                    name="name"
                    value={firstName}
                    onChange={handlefirstNameChange}
                    className="md:ml-8 text-xl md:my-0 my-7"
                  />):
                  (
                    <p className="md:ml-8 text-xl md:my-0 my-7">{firstName}</p>

                    )
                  }
                </div>

                <div className="flex items-center pt-4">
                  <p className="pr-2 font-bold text-xl">Adresse Mail: </p>
                  {}
                  {changebutton ? (
                  <input
                    type="text"
                    name="mail"
                    value={email}
      
                    onChange={handleEmailChange}
                    className="md:ml-8 text-xl md:my-0 my-7"
                  />):(
                    <p className="md:ml-8 text-xl md:my-0 my-7">{email}</p>
                    )
                  }
                </div>
                <div className="ml-28 mt-28">
                  <button onClick={toggleModal}>
                    <Button>Changer mot de passe</Button>
                  </button>
                  
                  {changebutton ?(
                  <button onClick={UpdateInfo}>
                  <Button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded"
                > Enregistrer
                </Button>
                </button>
                  ):(
                    <button onClick={handlechange}>
                  <Button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded"
                > Changer profile
                </Button>
                </button>
                )}
                  
                  {modal && <ChangePassword handlePasswordChange={handlePasswordChange} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Parmetres;

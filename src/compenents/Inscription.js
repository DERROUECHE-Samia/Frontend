




import axios from 'axios';
import React, {createContext, useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from 'react-icons/ri';
import img from "../images/top5.jpeg";
import Nav2 from "./Nav2";
import { useNavigate } from 'react-router-dom';

/**
 * Composant représentant la page d'inscription.
 * 
 * @component
 * @returns {JSX.Element} Composant React représentant la page d'inscription.
 */


export default function Inscription() {
  const [yes, setyes] = useState('True');
  const[CodeAndUserInfo,setCodeAndUserInfo]=useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState("");  // Corrected the state variable name
  const [familyName, setFamilyName] = useState("");  // Corrected the state variable name
  const [isUsernameTaken, setIsUsernameTaken] = useState("");  // Corrected the state variable name
  const currentTime =null;
  const [code, setCode] = useState("");
  const [c, setC] = useState("");

  const [sentTime, setSentTime] = useState(); // Replace with the actual sent time
  const [remainingTime, setRemainingTime] = useState(60); // Initial countdown time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const elapsedTimeInSeconds = Math.floor((currentTime - sentTime) / 1000);
      const newRemainingTime = Math.max(0, 60 - elapsedTimeInSeconds);
      setRemainingTime(newRemainingTime);

      // Optionally, you can redirect or perform other actions when the countdown reaches 0
      if (newRemainingTime === 0) {
        clearInterval(interval);
        // Add your logic here when the countdown reaches 0
      }
    }, 1000);

    // Clean up the interval when the component is unmounted or when sentTime changes
    return () => clearInterval(interval);
  }, [sentTime]);
  
  const getPasswordStrength = (password) => {
    if (password.length >= 8) {
      return 'Strong';
    } else if (password.length >= 6) {
      return 'Moderate';
    }else {
      return 'Weak';
    }
  };
  const navigate = useNavigate();
  const handleResendEmail = async () => {
 
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/send_email/', {
          email,
        });
        const currentTime = new Date(); // Get the current time
  
        setC(response.data.code)  
        setSentTime(currentTime);
        setRemainingTime(60);
        alert('code envoyé');
       
      } catch (error) {
        console.error('Error sending confirmation code:', error);
        alert('Vérifiez votre adresse e-mail');
      }
  
  };
  const verifycode = async () => {
    if (remainingTime === 0) {
      alert("Le code est expiré, veuillez-vous renvoyer un autre code?");
    } else {
      if (c === code) {
        try {
          // Make a request to create a new user
          const response = await axios.post('http://127.0.0.1:8000/api/utilisateur/', {
            user: {
              username: username, // replace with the desired username
              email: email, // replace with the desired email
              password: password, // replace with the desired password
            },
            first_name: firstName, // replace with the desired first name
            family_name: familyName, // replace with the desired family name
            // other fields as needed
          });
      
          // Check if the user was created successfully
          if (response.data.id) {
            navigate('/thanks');
          } else {
            alert('Erreur lors de la création de l\'utilisateur');
          }
        } catch (error) {
          console.error('Error creating user:', error);
          alert('Erreur lors de la création de l\'utilisateur');
        }
      } else {
        alert("Le code n'est pas correct");
      }
    }
  };
  

  const handleSendCode = async () => {
  try {
    if (
      username.trim().length === 0 ||
      familyName.trim().length === 0 ||
      firstName.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    if (isEmailTaken) {
      alert("Email déjà pris");
      return;
    }

    if (isUsernameTaken) {
      alert("Nom d'utilisateur déjà pris");
      return;
    }

    if (getConfirmPassword(confirmPassword, password) !== 'Yes' || strength !== 'Strong') {
      alert('Vérifiez vos informations');
      return;
    }

    const response = await axios.post('http://127.0.0.1:8000/api/send_email/', {
      email,
    });
    setSentTime(new Date());
    setC(response.data.code);
    setyes('False');
  } catch (error) {
    console.error('Error sending confirmation code:', error);
    alert('Erreur lors de l\'envoi du code de confirmation');
  }
};
  const getPasswordColor = (match) => {
    switch (match) {
      case 'Yes':
        return 'text-green-600';
      case 'No':
        return 'text-red-600';
      case 'Blank':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };
  const getLabelColor = (strength) => {
    switch (strength) {
      case 'Strong':
        return 'text-green-600';
      case 'Moderate':
        return 'text-yellow-600';
      case 'Weak':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  const handlefirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
  };
  const handlefamilyNameChange = (e) => {
    const newFamilyName = e.target.value;
    setFamilyName(newFamilyName);
  };
  
  const strength = getPasswordStrength(password);
  const labelColor = getLabelColor(strength);
  // Removed the ConfPassColor and match as it was causing errors
const handleCodeChange=(e)=>{
  const newcode = e.target.value;
  setCode(newcode);
}

  const getConfirmPassword = (confirmPassword, password) => {
    if (confirmPassword === password) {
      return 'Yes';
    } else {
      return 'No';
    }
  };

  const handleConfirmChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    const match = getConfirmPassword(newConfirmPassword, password);
  };
const handleUsernameChange = async (e) => {
  const newUsername = e.target.value;
  setUsername(newUsername);
  await ConfirmUsername(newUsername);  // Add 'await' here
};


const ConfirmUsername = async (newUsername) => { // Pass 'newUsername' as a parameter
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/check_username/', { username: newUsername });
    setIsUsernameTaken(response.data.is_taken);
  } catch (error) {
    console.error('Error checking username:', error);
  }
};
const handleEmailChange = async (e) => {
  const newEmail = e.target.value;
  setEmail(newEmail);
  await ConfirmEmail(newEmail);  
};
const[isEmailTaken,setIsEmailTaken]=useState('');
const ConfirmEmail = async (newEmail) => { // Pass 'newUsername' as a parameter
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/check_email/', { email: newEmail });
    setIsEmailTaken(response.data.is_taken);
  } catch (error) {
    console.error('Error checking username:', error);
  }
};
return (
  <>
    {yes === 'False' ? (
      <div>
            <div className='sticky-navbar'>
      <Nav2 />
    </div>

<div className= 'container mx-auto pt-16'>
  <div className=' flex w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>

<div className = 'w-1/2 py-16 px-12 '>
<h1 className='text-5xl  font-semibold'> Confirmez votre email!! </h1>
    <p className='font-medium  text-lg text-gray-950 mt-4'> 
nous avons envoyé un e-mail à votre adresse email contenant le code, veuillez écrire le code.</p>


    <div className='mt-9 '>




        <div>
            <label className='text-lg font-medium'>
           Enterez le Code 
           </label>
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
            onChange={handleCodeChange}
            type='text'
            
            
            />
        </div>




<div className='mt-5 flex flex-col gap-y-4'>
<button className= ' active:scale-95 active:duration-75 transition-all hover:scale-{1.01} ease-in-out py-4 rounded-xl  bg-violet-500 text-white  text-lg  font-bold ' onClick={verifycode}> Confirmer</button>
</div>


<p className="text-lg font-medium mt-5">
                Temps restant: {remainingTime} secondes
              </p>
              <p
                className="text-lg font-medium text-blue-500 cursor-pointer"
                onClick={handleResendEmail}
              >
                Renvoyer le code
              </p>
    </div  >
    </div >




<div className='w-1/2 p-5 rounded-2xl' >
  <img src = {img} alt='' />
</div>



  </div>  
</div>
      </div>
    ) : (
      <div className='sticky-navbar'>
        <Nav2 />
        <div className='container mx-auto pt-16'>
          <div className='flex w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
            <div className='w-1/2 py-16 px-12 '>
              <h1 className='text-5xl  font-semibold'>Bienvenue dans le monde de recherche!!</h1>
              <p className='font-medium text-lg text-gray-950 mt-4'>Créer votre compte maintenant !</p>
              
              <div className='mt-9 '>
    <div>
        <label className='text-lg font-medium'>
                Nom d'utilisateur  
                </label>
                {isUsernameTaken && <p style={{ color: 'red' }}>Nom d'utilisateur déjà pris.</p>}
                {!isUsernameTaken && <p style={{ color: 'green' }}>Nom d'utilisateur disponible.</p>}

                <input 
                className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
                
                placeholder=  'Entrez votre nom '
                type = 'text'
                onChange={handleUsernameChange}
                />
        </div>     
        <div>
        <label className='text-lg font-medium'>
            Nom  
            </label>
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
            onChange={handlefamilyNameChange}

            placeholder=  'Entrez votre nom '
            type = 'text'
            />
        </div>
        <div>
        <label className='text-lg font-medium'>
            Prénom 
            </label>

            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
            onChange={handlefirstNameChange}
            placeholder=  'Entrez votre prénom '

            type = 'text'
            />
        </div>
       

        <div>
        <label className='text-lg font-medium'>
            Email  
            </label>
            
            {isEmailTaken && <p style={{ color: 'red' }}>Email déjà pris.</p>}
                {!isEmailTaken && <p style={{ color: 'green' }}>Email disponible.</p>}
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
            
            placeholder=  'Entrez votre email '
            type = 'email'
            onChange={handleEmailChange}
            />
        </div>
        <div>

        <label className='text-lg font-medium'>
           Mot De Passe 
           </label>
           <p className={`mt-2 ${labelColor}`}>{`Strength: ${strength}`}</p>

            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
            placeholder=' Entrez votre mot de passe '
            type='password'
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <div>

        <label className='text-lg font-medium'>
          Confirmation De Mot De Passe 
           </label>
           <p className={`mt-2 ${getPasswordColor(getConfirmPassword(confirmPassword, password))}`}>{`Password match: ${getConfirmPassword(confirmPassword, password)}`}</p>

            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
            placeholder=' Confirmez votre mot de passe '
            type='password'
            onChange={handleConfirmChange}
            />
        </div>
        </div>
                      <div className='mt-5 flex flex-col gap-y-4'>
                <button onClick={handleSendCode} className='active:scale-95 active:duration-75 
                transition-all hover:scale-1.01 ease-in-out py-4 rounded-xl bg-violet-500 text-white text-lg font-bold'>
                  Créer un compte
                </button>
              </div>
            </div>
            <div className='w-1/2 p-5 rounded-2xl'>
              <img src={img} alt='' />
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
    }

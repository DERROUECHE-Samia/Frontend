import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const type=localStorage.getItem('type')
  const n=localStorage.getItem('id_user')
  
  const navigate = useNavigate();

  const ChangePass = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/change-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any additional headers if needed
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
          id:n,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Password changed successfully');
        alert ('Succées');
        window.location.reload()
        // Additional logic after successful password change
      } else {
        alert ('mot de passe est incorrect');

        console.error('Failed to change password:', data.detail);
        // Handle error, display message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle unexpected errors
    } finally {
      setModal(!modal);
      setOldPassword(""); // Reset the input fields
      setNewPassword("");
    }
  };
  const handle =()=>
  {
    window.location.reload();
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div>
        <div onClick={ChangePass} className="overlay"></div>
        <div className="modal-content">
        <button className='absolute top-2 right-2 text-lg' onClick={handle}>
              &times;
            </button>
          <p className="font-bold text-2xl pb-4">Changer votre mot de passe </p>
          <div className="py-4 px-17">
            <div className='mt-8'>
              <div>
                <label className='text-lg font-medium'>
                  Mot de passe actuel
                </label>
                <input 
                  className='w-full border-2 border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Entrez votre mot de passe'
                  type='password'
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div>
                <label className='text-lg font-medium'>
                  Nouveau mot de passe
                </label>
                <input 
                  className='w-full border-2 border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Entrez votre mot de passe'
                  type='password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className='mt-5 flex flex-col gap-y-4'>
                <button 
                  onClick={ChangePass}
                  className='active:scale-95 active:duration-75 transition-all hover:scale-{1.01} ease-in-out py-4 rounded-xl bg-indigo-600 text-white text-lg font-bold'
                >
                  Enregistrer
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

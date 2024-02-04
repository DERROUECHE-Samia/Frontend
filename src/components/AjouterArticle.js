import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AjouterArticle() {
  const [modal, setModal] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [url, setURL] = useState('');

  const navigate = useNavigate();


  const [R,setR]=useState(false);
  const createArticle = async (url)=>{
    handlextract(url);
    handlecreat(url);
  } 
  const handlecreat= async(url)=>{
    try {
      const response = await fetch('http://127.0.0.1:8000/api/extract/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           
          
        pdf_path: url,
        content: "extracted_text.txt",
      
         
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User created successfully');
        alert('Article créé avec succès');
        // Additional logic after successful user creation
      } else {
        console.error('Failed to create user:', data.detail);
        alert('Erreur lors de la création de l\'article');
        // Handle error, display message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle unexpected errors
    } 
  };
  const handlextract= async(url)=>{
    try {
      const response = await fetch('http://127.0.0.1:8000/api/extract-text/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           
          pdf_path: url,
          content: "extracted_text.txt",
        
         
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User created successfully');
        // Additional logic after successful user creation
      } else {
        console.error('Failed to create user:', data.detail);
        alert('Erreur lors de la création de l\'article');
        // Handle error, display message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle unexpected errors
    } 
  };

  const handle =()=>
  {
    window.location.reload();
  };

  return (
    <>
      <div >
        <div onClick={() => setModal(false)} className="overlay"></div>
        <div className="modal-content w-300 mt-20 mx-auto bg-white rounded-lg shadow-lg">
          <button className='absolute top-2 right-2 text-lg' onClick={handle}>
            &times;
          </button>
          <p className="font-bold text-2xl pb-4">Créer un Article</p>
          <div className="py-4 px-8">
          {R ? (
  <div className='mt-4'> 
    <label className='text-lg font-medium'>
      Sélectionner un fichier
    </label>
    <input
      type="file"
      className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1 bg-transparent'
      onChange={(e) => setURL(e.target.value)}               
      value={url}
    />
  </div>
) : (
    
  <div className='mt-4'>
    <label className='text-lg font-medium'>
      Ajouter URL
    </label>
    <input 
      className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1 bg-transparent'
      placeholder='Entrez URL'
      type='url'
      value={url}
      onChange={(e) => setURL(e.target.value)}
    />
  </div>
)}
<button onClick={() => setR(!R)} className="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none">
                {!R ? 'Uploader un fichier' : 'Ajouter une URL'}
              </button>
            <div className='mt-5'>
              <button 
                onClick={()=>createArticle(url)}
                className='active:scale-95 active:duration-75 transition-all hover:scale-101 ease-in-out py-2 rounded-xl bg-indigo-600 text-white text-lg font-bold w-full'
              >
                Créer Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

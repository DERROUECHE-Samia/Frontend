import React, { useState } from 'react';

const ArticleModer = ({ article, onSaveEdit, onCancelEdit }) => {
    const [editedArticle, setEditedArticle] = useState({ ...article });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
    };

  

    const handleSaveClick = () => {
        // Appeler la fonction onSaveEdit avec l'article édité
        onSaveEdit(editedArticle);
      };
    

  return (
    <div className="flex flex-col items-center">
      <div className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'>
        <div className="mb-4">
          <p className="pr-2 font-bold">Titre de l'article:</p>
          <input
            type="text"
            name="titre"
            value={editedArticle.titre}
            onChange={handleInputChange}
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
          />
        </div>

        <div className="mb-4">
          <p className="pr-2 font-bold">L'Auteur de l'article:</p>
          <input
            type="text"
            name="auteur"
            value={editedArticle.auteur}
            onChange={handleInputChange}
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
          />
        </div>

        <div className="mb-4">
          <p className="pr-2 font-bold">L'Institution de l'article:</p>
          <input
            type="text"
            name="institution"
            value={editedArticle.institution}
            onChange={handleInputChange}
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
          />
        </div>

        <div className="mb-4">
          <p className="pr-2 font-bold">Résumé de l'article:</p>
          <textarea
            name="resume"
            value={editedArticle.resume}
            onChange={handleInputChange}
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
          />
        </div>

        <div className="mb-4">
          <p className="pr-2 font-bold">Mot clé de l'article:</p>
          <input
            type="text"
            name="motcle"
            value={editedArticle.motcle}
            onChange={handleInputChange}
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
          />
        </div>

        <div className="mb-4">
          <p className="pr-2 font-bold">3 Références de l'article:</p>
          <input
            type="text"
            name="reference"
            value={editedArticle.reference}
            onChange={handleInputChange}
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
          />
        </div>

        <div className="mb-4">
          <p className="pr-2 font-bold">Le lien pdf de l'article:</p>
          <input
            type="text"
            name="pdf"
            value={editedArticle.pdf}
            onChange={handleInputChange}
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
          />
        </div>

        <div className="mb-4">
          <p className="pr-2 font-bold">L'article en format textuel:</p>
          <input
            type="text"
            name="textuel"
            value={editedArticle.textuel}
            onChange={handleInputChange}
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
          />
        </div>

        <div className="mb-4">
          <button
            onClick={handleSaveClick}
            className="bg-indigo-700 text-white mt-4 py-2 px-4 w-1/2 mr-10 ml-40 rounded-3xl "
          >
            Valider
          </button>
       
        </div>


      </div>
    </div>
  );
};

export default ArticleModer;

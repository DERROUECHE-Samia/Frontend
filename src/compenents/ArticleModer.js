import React, { useState ,useEffect } from 'react';

const ArticleModer = ({ article,id }) => {
    const [editedArticle, setEditedArticle] = useState({ ...article });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
    };
  

    const handleSaveClick = () => {

      };
    

  return (
    <div className="flex flex-col items-center">
      <div className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'>
        <div className="mb-4">
          <p className="pr-2 font-bold">Titre de l'article:</p>
          <input
            type="text"
            name="titre"
            value={id}
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

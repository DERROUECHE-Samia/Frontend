import React, { useState } from 'react';
import Nav1 from './Nav1';
import Article from './Article';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PageModer = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([
    {
      titre: 'Premier article',
      auteur: 'Auteur 1',
      institution: 'Institution 1',
      resume: 'Résumé 1',
      motcle: 'Mot clé 1',
      reference: 'Référence 1',
      pdf: 'lien_pdf_1',
      textuel: 'Texte 1',
    },
    {
      titre: 'Deuxième article',
      auteur: 'Auteur 2',
      institution: 'Institution 2',
      resume: 'Résumé 2',
      motcle: 'Mot clé 2',
      reference: 'Référence 2',
      pdf: 'lien_pdf_2',
      textuel: 'Texte 2',
    },
  ]);

  const handleArticleClick = (article) => {
    // Si l'article sélectionné est le même que celui déjà affiché,
    // cela signifie que l'utilisateur a cliqué pour le cacher
    setSelectedArticle((prevSelectedArticle) =>
      prevSelectedArticle === article ? null : article
    );
  };

  const handleDeleteArticle = (article) => {
    const updatedArticles = articles.filter((a) => a !== article);
  
    // Mettez à jour la liste d'articles
    setArticles(updatedArticles);
  
    // Cacher l'article si l'article supprimé est celui actuellement sélectionné
    if (selectedArticle === article) {
      setSelectedArticle(null);
    }
  };
  
  
  
  
  

  const handleEditArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleSaveEdit = (editedArticle) => {
    const updatedArticles = articles.map((article) =>
      article === selectedArticle ? editedArticle : article
    );
    setArticles(updatedArticles);
    setSelectedArticle(null);
  };

  return (
    <div>

      <div className='mt-5 flex'>
        <div className='w-1/2 p-4'>
          <p className='mt-10 mr-13 ml-12 w-80 mx-auto rounded-3xl transition-all hover:scale-1.01 ease-in-out py-4 text-black text-lg font-bold'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='mr-5 ml-5 w-6 h-6 inline-block mr-2'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
            Les articles téléchargés :
          </p>
          {articles.map((article, index) => (

        <div
              key={index}
              className='mt-5 p-4 border border-solid border-2 border-black rounded-md cursor-pointer hover:bg-gray-100'
              onClick={() => handleArticleClick(article)}
            >
         <div className='flex items-center justify-between'>
                <div>
                  {article.titre}
               </div>
           <div className='flex items-center'>
             <button
               className='mr-2 p-2 bg-black text-white rounded-md text-sm'
              onClick={() => handleEditArticle(article)}
              >
                   <FontAwesomeIcon icon={faEdit} />
              </button>
             <button
              className='p-2 bg-black text-white rounded-md text-sm'
             onClick={() => handleDeleteArticle(article)}
             >
              <FontAwesomeIcon icon={faTrash} />
              </button>
           </div>
         </div>
       </div>
  
            
          ))}
        </div>


        {selectedArticle ? (
  <div className='w-1/2 p-4'>
   
    <Article article={selectedArticle} onSaveEdit={handleSaveEdit} onCancelEdit={() => setSelectedArticle(null)} />
  </div>
): (

  <p className='mt-16 mr-13 ml-12 w-80 mx-auto rounded-3xl transition-all hover:scale-1.01 ease-in-out py-4 text-black text-lg font-bold'>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    className='mr-5 ml-5 w-6 h-6 inline-block mr-2'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
  </svg>
Aucun article selectionné</p>
)}
        </div>
      </div>
    

  );
};

export default PageModer;

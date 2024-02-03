import React, { useState } from 'react';
import Nav1 from './Nav1';
import ArticleModer from './ArticleModer';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Article from './Article';

const PageModer = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedArticlee, setSelectedArticlee] = useState(null);

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

  const handleEditArticle = (article) => {
    setSelectedArticle((prevSelectedArticle) =>
      prevSelectedArticle === article ? null : article
    );
  };

  const handleDeleteArticle = (article) => {
    const updatedArticles = articles.filter((a) => a !== article);

    setArticles(updatedArticles);

    if (selectedArticle === article) {
      setSelectedArticle(null);
    }
  };

  const handleArticleClick = (article) => {
    setSelectedArticlee(article);
  };

  const handleSaveEdit = (editedArticle) => {
    const updatedArticles = articles.map((article) =>
      article === selectedArticle ? editedArticle : article
    );

    setArticles(updatedArticles);
    setSelectedArticle(null);
  };

  return (
    

    <div className='mt-5 flex'>
      
      <Nav1/>
      
      <div className='w-1/2 p-4 mr-4'>
        <h2 className='text-2xl font-bold mb-4 text-indigo-700'>Articles Téléchargés</h2>
        {articles.map((article, index) => (
          <div
            key={index}
            className='mt-5 p-4 border border-solid border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-100'
            onClick={() => handleArticleClick(article)}
          >
            <div className='flex items-center justify-between'>
              <div>{article.titre}</div>
              <div className='flex items-center'>
                <button
                  className='mr-2 p-2 bg-indigo-700 text-white rounded-md text-sm'
                  onClick={() => handleEditArticle(article)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className='p-2 bg-indigo-700 text-white rounded-md text-sm'
                  onClick={() => handleDeleteArticle(article)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-1/2 p-4 ml-4'>
        <h2 className='text-2xl font-bold mb-4 text-indigo-700'>Article Sélectionné</h2>
        {selectedArticle ? (
          <div className='border border-solid border-indigo-700 p-4'>
            <ArticleModer
              article={selectedArticle}
              onSaveEdit={handleSaveEdit}
              onCancelEdit={() => setSelectedArticle(null)}
            />
          </div>
        ) : (
          <p className='mt-16 w-full mx-auto rounded-3xl transition-all hover:scale-1.01 ease-in-out py-4 text-black text-lg font-bold'>
            Aucun article sélectionné
          </p>
        )}

        {selectedArticlee ? (
          <div className='mt-8 border border-solid border-indigo-700 p-4'>
            <Article
              article={selectedArticlee}
              onSaveEdit={handleSaveEdit}
              onCancelEdit={() => setSelectedArticlee(null)}
            />
          </div>
        ) : (
          <p className='mt-16 w-full mx-auto rounded-3xl transition-all hover:scale-1.01 ease-in-out py-4 text-black text-lg font-bold'>
            Aucun article sélectionné
          </p>
        )}
      </div>
    </div>
  );
};

export default PageModer;

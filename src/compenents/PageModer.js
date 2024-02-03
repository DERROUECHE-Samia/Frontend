import React, { useState ,useEffect } from 'react';
import Nav1 from './Nav1';
import ArticleModer from './ArticleModer';

import Article from './Article';
import {useNavigate } from 'react-router-dom';

const PageModer = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedArticlee, setSelectedArticlee] = useState(null);
  const type=localStorage.getItem('type');
  const navigate = useNavigate();
  const [articlee, setArticlee] = useState();
  const fetchArticlees = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/articlee/${id}/`);
      const data = await response.json();
      setArticlee(data); // Corrected line
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert("error");
    }
  };
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
  useEffect(() => {
    fetchArticles();
    const isUserSignedIn = () => {
      const token = localStorage.getItem('token');
      return !!token;
    };

    if (!isUserSignedIn()) {
      navigate('/login'); 
    }  else {
      if (type !== 'moderateur') {
        navigate('/unauthorized');
      }
    }

  
  }, [type,navigate]);


  const fetchArticles = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/non-treated-articles/');
      const data = await response.json();
      setArticles(data); // Corrected line
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert("error");
    }
  };
  const Select=(article,id)=>{
    setSelectedArticle(article);
    fetchArticlees(id);
  }
  
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
  const validate=(id)=>{
    
  }
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
              <div>{article.title}</div>
              <div className="flex space-x-2">
      
    </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-1/2 p-4 ml-4'>
        <h2 className='text-2xl font-bold mb-4 text-indigo-700'>Article Sélectionné</h2>
        {selectedArticle && (
          <div className='border border-solid border-indigo-700 p-4'>
            <ArticleModer
              article={articlee}
              id={articlee.id}
            />
          </div>
        )}

        {selectedArticlee ? (
          <div className='mt-8 border border-solid border-indigo-700 p-4'>
            <Article
          
                             article={{
                                 id:selectedArticlee.id,
                                 titre:selectedArticlee.title,
                                 auteur:selectedArticlee.auteur,
                                 institution:selectedArticlee.institution,
                                 resume:selectedArticlee.title,
                                 motcle: selectedArticlee.motcle,
                                 reference: selectedArticlee.reference,
                                 pdf: selectedArticlee.pdf_url,
                                 textuel: selectedArticlee.textuel
                             }}
                         
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

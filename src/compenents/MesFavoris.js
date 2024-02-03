import React from 'react';
import Titrearticle from './Titrearticle';
import  { useState ,useEffect} from 'react';


import Nav1 from './Nav1';
import Article from './Article';  

/**
 * Composant MesFavoris - Affiche la liste des éléments favoris de l'utilisateur.
 * @component
 */



function MesFavoris() {
  const [articles, setArticles] = useState([]);
  const id=localStorage.getItem('id');
  const fetchArticles = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/utilisateur/${id}`);
      const data = await response.json();
      setArticles(data.favoris); // Corrected line
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert("error");
    }
  };

    return (
      <div>
    <Nav1 user={{ name: 'derr', fullName: 'John Doe' , mail:'john@gmail.com'}}/>

        <div className="container mx-auto p-4">
          
        </div>
        {articles.map((article, index) => (

<div>
<Titrearticle
article={{
titre: article.title,
auteur: article.authors.map((author, index) => <span key={index}>{author.name}, </span>),
institutions: article.institutions.map((institution, index) => <span key={index}>{institution.name}, </span>),
resume: article.abstract,
motsCles: article.keywords.map((keyword, index) => <span key={index}>{keyword.name}, </span>),
references: article.references.map((reference, index) => <span key={index}>{reference.citation}, </span>),
pdf: article.pdf_url,
textuel: article.textuel,
}}
/>
</div>
))}


      </div>
    );
  }
  
  export default MesFavoris;


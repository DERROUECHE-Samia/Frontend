import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


/**
 * Composant représentant un article avec des détails tels que le titre, l'auteur, l'institution, le résumé, etc.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {object} props.article - Les détails de l'article.
 * @param {string} props.article.titre - Le titre de l'article.
 * @param {string} props.article.auteur - L'auteur de l'article.
 * @param {string} props.article.institution - L'institution de l'article.
 * @param {string} props.article.resume - Le résumé de l'article.
 * @param {string} props.article.motcle - Le mot-clé de l'article.
 * @param {string} props.article.reference - Les références de l'article.
 * @param {string} props.article.pdf - Le lien PDF de l'article.
 * @param {string} props.article.textuel - Le contenu textuel de l'article.
 * @returns {JSX.Element} Composant React représentant un article.
 */


const Article = ({ article }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const id=localStorage.getItem('id');
    const type=localStorage.getItem('type');
    const updatedFavorites = [...data.favoris, newFavorite];
    const newFavorite = {
      id: id, // ID of the new article
      title: article.titre,
      abstract: article.abstract,
      authors: article.auteur, // Example author
      institutions: article.institution, // Example institution
      keywords: article.motcle, // Example keyword
      pdf_url: article.pdf, // Example PDF URL
      references: article.refrence, // Example references
      date_created: new Date().toISOString(), // Current date
    };
    const handleHeartClick = () => {
      setIsFavorite(!isFavorite);
  
      // Ajouter/Retirer l'article des favoris ici (vous pouvez implémenter cette logique)
     
      if (!isFavorite) {
        console.log('Ajouter aux favoris :', article.titre);
        // Effectuer l'action d'ajout aux favoris
      } else {
        console.log('Retirer des favoris :', article.titre);
        // Effectuer l'action de retrait des favoris
      }
    }
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/your_endpoint/');
        const data = await response.json();
        return data.favoris;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // You can handle the error as needed
      }
    };
    const [data,SetData]=useState();
    const ajouterFav = () => {
      try {
        const response =  fetch(`http://127.0.0.1:8000/api/${type}/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          favoris: updatedFavorites,
        }),

      });
      const data = response.json();
      
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
        console.error('Error creating user:', error);
        alert('erreur');
      }
   
    };
    useEffect()
    {SetData(fetchData());
    };
  return (
    <div className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'>
        <div className="pt-4">
          <p className="pr-2 font-bold">Titre: </p>
          {article.titre}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">Auteurs: </p>
          {article.auteur}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">Institutions: </p>
          {article.institution}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">Résumé: </p>
          <p className="text-black">{article.resume}</p>
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">Mots clés: </p>
          {article.motcle}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">Références: </p>
          {article.reference}
        </div>

        <div className="pt-4">
          <Link to={article.pdf}>
          <p className="pr-2 font-bold">Le lien pdf: </p>
          </Link>
        </div>

        <div className="pt-4 pb-8">
          <p className="pr-2 font-bold">L'article en format textuel: </p>
          {article.textuel}
        </div>

        <div
          className={`cursor-pointer`}
          onClick={handleHeartClick}
        >
          <ion-icon  onClick={ajouterFav} name="heart" size="large" style={{ color: isFavorite ? 'red' : 'black' }}></ion-icon>
        </div>
    
    </div>
  );
};

export default Article;

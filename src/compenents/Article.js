import React, { useState } from 'react';


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

  return (
    <div className="md:pl-8 md:pr-96">
      <div className="border border-solid border-2 border-black pl-4 pr-4 pb-4 md:pr-0">
        <div className="pt-4">
          <p className="pr-2 font-bold">Titre de l'article: </p>
          {article.titre}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">L'Auteur de l'article: </p>
          {article.auteur}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">L'Institution de l'article: </p>
          {article.institution}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">Résumé de l'article: </p>
          <p className="text-black">{article.resume}</p>
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">Mot clé de l'article: </p>
          {article.motcle}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">3 Références de l'article: </p>
          {article.reference}
        </div>

        <div className="pt-4">
          <p className="pr-2 font-bold">Le lien pdf de l'article: </p>
          {article.pdf}
        </div>

        <div className="pt-4 pb-8">
          <p className="pr-2 font-bold">L'article en format textuel: </p>
          {article.textuel}
        </div>

        <div
          className={`cursor-pointer`}
          onClick={handleHeartClick}
        >
          <ion-icon name="heart" size="large" style={{ color: isFavorite ? 'red' : 'black' }}></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Article;

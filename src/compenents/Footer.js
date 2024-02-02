// Footer.js
import React from 'react';

/**
 * Composant représentant le pied de page de l'application.
 *
 * @component
 * @returns {JSX.Element} Composant React représentant le pied de page.
 */


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">

      <div className="container mx-auto flex justify-between items-center  pl-8">
        <div>
          <h2 className="text-lg font-semibold ">RTcleByte</h2>
          <p> Un site qui vous permet de trouver differents </p>
          <p> articles scientifiques, faire la recherche </p>
          <p> des articles suivant plusieurs criteres</p>
        </div>
      
        <div className=' pr-8 '>
          <h3 className="text-lg font-semibold mb-2">Nous contacter</h3>
          <p>Email : RTcleByte@gmail.com</p>
          <p>Téléphone : +213 43 23 45 67 89</p>
        </div>
      </div>
      <div className="mt-4 text-center pb-12">
        <p>Made with love 💙 </p>
        <p>&copy; {new Date().getFullYear()} RTcleByte. Tous droits réservés.</p>
      </div>
     
    </footer>
  );
};

export default Footer;

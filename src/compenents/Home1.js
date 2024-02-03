import React from "react";
import img from '../images/Group 2.png';

/**
 * Composant représentant la première section de la page d'accueil.
 *
 * @component
 * @returns {JSX.Element} Composant React représentant la première section.
 */

export default function Home1() {
  return (
    <div className=" w-full relative pt-44 pb-10 max-w-3xl mx-auto overflow-hidden">
    <div className=" w-full  absolute inset-0 bg-blue-200 opacity-70 rounded-3xl shadow-2xl mx-4"></div>
    <img
      src={img}
      alt="Description de l'image"
      className="w-full h-full max-w-full mx-auto relative z-10 rounded-3xl"
      style={{ width: '100%', height: '100%' }}
    />
  </div>
  
  
  );
}

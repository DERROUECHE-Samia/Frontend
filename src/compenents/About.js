// About.js

import React from "react";

/**
 * Composant représentant la section "Rencontrer Notre Équipe".
 * @component
 *
 * @returns {JSX.Element} - Élément React représentant la section.
 */
export default function About() {
  return (
    <div className="relative pb-44 max-w-3xl mx-auto text-center">
      {/* Titre de la section */}
      <h3 className="font-bold text-4xl mb-24">Rencontrer Notre Équipe</h3>
      
      {/* Section des membres de l'équipe */}
      <div className="flex justify-center mb-24">
        {/* Membre 1 */}
        <div className="text-center mx-4">
          <img
            src={'/Ellipse 14.png'}
            alt="Image de Derroueche Samia"
            className="w-full h-full max-w-full mx-auto mb-4"
            style={{ width: '80%', height: '80%' }}
          />
          <p className="font-semibold">Derroueche Samia</p>
          <p>Front end Developper</p>
        </div>

        {/* Membre 2 */}
        <div className="text-center mx-4">
          <img
            src={'/Ellipse 11.png'}
            alt="Image de Benabdallah Asma"
            className="w-full h-full max-w-full mx-auto mb-4"
            style={{ width: '100%', height: '81%'}}
          />
          <p  className="font-semibold ">Benabdallah Asma</p>
          <p>Front end Developper</p>
        </div>

        {/* Membre 3 */}
        <div className="text-center mx-4">
          <img
            src={'/Ellipse 12.png'}
            alt="Image de Rebhi Assala"
            className="w-full h-full max-w-full mx-auto mb-4"
            style={{ width: '100%', height: '81%'}}
          />
          <p className="font-semibold">Rebhi Assala</p>
          <p>Back end Developper</p>
        </div>

        {/* Membre 4 */}
        <div className="text-center mx-4">
          <img
            src={'/Ellipse 16.png'}
            alt="Image de Keddour Dina"
            className="w-full h-full max-w-full mx-auto mb-4"
            style={{ width: '100%', height: '81%'}}
          />
          <p className="font-semibold">Keddour Dina</p>
          <p>Back end Developper</p>
        </div>
      </div>
    </div>
  );
}

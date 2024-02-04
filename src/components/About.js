// About.js

import React from "react";
import img1 from '../images/Ellipse 14.png' ; 
import img2 from '../images/Ellipse 11.png';
import img3 from '../images/Ellipse 12.png';
import img4 from '../images/Ellipse 16.png';
import img5 from '../images/rahma.jpg';
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
        src={img1}
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
        src={img2}
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
        src={img3}
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
        src={img4}
        alt="Image de Keddour Dina"
        className="w-full h-full max-w-full mx-auto mb-4"
        style={{ width: '100%', height: '81%'}}
      />
      <p className="font-semibold">Keddour Dina</p>
      <p>Back end Developper</p>
    </div>
  </div>

  {/* Membre 5 in another line */}
  <div className="text-center mx-4">
    <div>
      <img
        src={img5}
        alt="Image de Soltani Rahma"
        className="w-full h-full max-w-full mx-auto mb-4 rounded-full"
        style={{ width: '22%', height: '22%' }}
      />
    </div>
    <div>
      <p className="font-semibold">Soltani Rahma</p>
      <p>Full Stack Developer</p>
    </div>
  </div>
</div>



  );
}

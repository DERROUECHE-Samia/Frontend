import React from "react";
import img from "../images/top5.jpeg";
import Nav2 from "./Nav2";

/**
 * Composant de la page de remerciement après l'inscription.
 * @returns {JSX.Element} Composant React.
 */


export default function ThanksPage() {
  return (
    <>
      <div className='sticky-navbar'>
        <Nav2 />
      </div>

      <div className='container mx-auto pt-16'>
        <div className='flex w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
          <div className='w-1/2 py-16 px-12'>
            <h1 className='text-5xl font-semibold text-blue-700'>Merci pour votre inscription!</h1>
            <p className='font-medium text-lg text-gray-800 mt-4'>
              Félicitations! Vous faites maintenant partie de notre communauté. Merci de choisir notre service.
            </p>

            <div className='mt-9'>
              <p className='text-lg text-gray-700'>
                Pour toute question ou assistance, n'hésitez pas à nous contacter.
              </p>
              {/* Add more personalized content or call-to-action here */}
            </div>
          </div>

          <div className='w-1/2 p-5 rounded-2xl'>
            <img className='object-cover w-full h-full rounded-2xl' src={img} alt='Welcome' />
          </div>
        </div>
      </div>
    </>
  );
}

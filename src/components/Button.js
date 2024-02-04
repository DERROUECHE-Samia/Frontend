import React from "react";

/**
 * Composant représentant un bouton stylisé.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {ReactNode} props.children - Les éléments enfants du composant, généralement le texte à afficher dans le bouton.
 * @returns {JSX.Element} Composant React représentant un bouton stylisé.
 */


export default function Button(props) {
    return(
        <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 '>
            {props.children}
        </button>
    )
}

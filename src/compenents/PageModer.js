import React, { useState } from 'react';
import Nav1 from './Nav1';

/**
 * Composant de la page du moderateur.
 * @component
 */

const PageModer = () => {
    return (
    <div>
    <Nav1 user={{ name: 'derr', fullName: 'John Doe' , mail:'john@gmail.com'}}/>

      <div className='mt-5 flex flex-col gap-y-4'>
        <p
          className='mt-10 mr-13 ml-12 w-80 mx-auto rounded-3xl 
           transition-all hover:scale-1.01 ease-in-out py-4
          bg-violet-500 text-white text-lg font-bold'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className=' mr-5 ml-5 w-6 h-6 inline-block mr-2'
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
         Les articles téléchargés : 
        </p>
      </div>

      </div>
    );
    };

export default PageModer;
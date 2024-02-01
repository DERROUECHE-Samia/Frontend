import React, { useState } from 'react';

export default function SearchBar() {
const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Mettez ici la logique de recherche si nécessaire
    console.log('Recherche de :', searchText);
  };

  return (
    <div className="flex items-center pt-4 justify-center mt-4">
      <div className="flex  w-1/3 border border-black rounded-full overflow-hidden ">
        <input
          type="text"
          placeholder="Rechercher un article   "
          value={searchText}
          onChange={handleInputChange}
          className="bg-blue-100  px-4 py-3 flex-1 focus:outline-none "
        />
         <button 
          onClick={handleSearch}
          className="bg-blue-100 hover:bg-rose-100 p-3 flex items-center justify-center"
         >
             <span className='text-black'>
             <ion-icon className='h-20 w-20' name="search"></ion-icon>
             </span>
          
        </button>
      </div>
    </div>
  );
}


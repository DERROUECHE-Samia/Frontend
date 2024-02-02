import React, { useState ,useEffect} from 'react';
import Article from './Article.js';
import Nav1 from "./Nav1.js";
import {useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const type=localStorage.getItem('type');
  const navigate=useNavigate();
  const [searchResult, setSearchResult] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const result = {
      titre: 'samia',
      auteur: 'AAAAAAAAAAuttttteuuuuuur ',
      institution: 'IIIIIIIIIInstiiitution',
      resume: 'resumme',
      motcle: 'fffffff',
      reference: 'rrrrrreefeeerence',
      pdf: 'pddddddddddf',
      textuel: 'texxxxxxxxxxt',
    };

    setSearchResult(result);
  };

  const handleFilterkeyword = () => {
    //loggique du filtre selon les mots cles
  };

  const handleFilterauthors = () => {
  };

  const handleFilterinstitutions = () => {
  };

  const handleFilterpublicationPeriod = () => {
  };
  
  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };
 useEffect(() => {
    const isUserSignedIn = () => {
      const token = localStorage.getItem('token');
      return !!token;
    };

    if (!isUserSignedIn()) {
      navigate('/login'); 
    }  else {
      if (type !== 'user') {
        navigate('/unauthorized');
      }
    }

  
  }, [type,navigate]);

  return (
    <>
    <Nav1/>
      <div className="flex items-center pt-16 pb-8 justify-center mt-4">
        <div className="flex w-1/3 border border-black rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Rechercher un article"
            value={searchText}
            onChange={handleInputChange}
            className="bg-blue-100 px-4 py-3 flex-1 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-100 hover:bg-rose-100 p-3 flex items-center justify-center"
          >
            <span className="text-black">
              <ion-icon name="search" size="medium"></ion-icon>
            </span>
          </button>
        </div>
        <button
          onClick={handleFilterClick}
          className="hover:bg-rose-100 p-3 relative"
        >
          <span className='text-black'>
            <ion-icon name="funnel" size="large"></ion-icon>
          </span>
          {showDropdown && (
            <div className="absolute border bg-blue-100 border-solid border-2 border-blue-100 p-4 mt-8 rounded-md mt-1 z-10 "
            style={{ left: "-140px", width: "200px" }}>
              <div className='pb-2 flex  text-indigo-700 font-bold ' onClick={handleFilterkeyword}>-Les mots clés</div>
              <div className='pb-2 flex  text-indigo-700 font-bold  ' onClick={handleFilterauthors}>-Les auteurs</div>
              <div className='pb-2 flex  text-indigo-700 font-bold ' onClick={handleFilterinstitutions}>-Les institutions</div>
              <div className='pb-2 flex text-indigo-700 font-bold ' onClick={handleFilterpublicationPeriod}>-Période entre deux dates de publication</div>
            </div>
          )}
        </button>
      </div>

      {/* Affichage du résultat de la recherche */}
      <div>
        {searchResult && (
          <Article
            article={{
              titre: searchResult.titre,
              auteur: searchResult.auteur,
              institution: searchResult.institution,
              resume: searchResult.resume,
              motcle: searchResult.motcle,
              reference: searchResult.reference,
              pdf: searchResult.pdf,
              textuel: searchResult.textuel,
            }}
          />
        )}
      </div>
    </>
  );
}
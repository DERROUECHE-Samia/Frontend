import Titrearticle from './Titrearticle';


import React, { useState ,useEffect} from 'react';
import Article from './Article.js';
import Nav1 from "./Nav1.js";
import {useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const type=localStorage.getItem('type');
  const [searchResult, setSearchResult] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTextFiltre, setSearchTextFiltre] = useState('');
  const [filter,setFilter]=useState();
  const handleInputChangeFiltre = (e) => {
    setSearchTextFiltre(e.target.value);
  };


  const navigate = useNavigate();
  const typ=localStorage.getItem('type');
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };


  
  const handleSearch = () => {
    if(filter==null)
    {
    try {

      
      const response =  fetch(`http://127.0.0.1:8000/api/search/?search=${search}`);
      const data = response.json();
      setArticles(data); // Corrected line
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert("error");
    }
  }else{
    try {
    const response =  fetch(`http://127.0.0.1:8000/api/search/?${filter}=${search}`);
      const data = response.json();
      setArticles(data); // Corrected line
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert("error");
  }
}
 };
  const handleFilterClick = () => {

     setShowDropdown(!showDropdown);

  };
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  const fetchArticles = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/search/');
      const data = await response.json();
      setArticles(data); // Corrected line
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert("error");
    }
  };
  const handlefilter = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/search/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchText: search,
          searchTextFiltre: searchTextFiltre,
        }),
      });
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error('Error searching articles:', error);
    }
  };
 useEffect(() => {
   fetchArticles();
    const isUserSignedIn = () => {
      const token = localStorage.getItem('token');
      return !!token;
    };

    if (!isUserSignedIn()) {
      navigate('/login'); 
    }  else {
      if (type !== 'utilisateur') {
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
      onChange={(e) => setSearch(e.target.value)}
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

        <div className='flex items-center mt-4 md:mt-0 relative'>
        <button
          onClick={handleFilterClick}
          className="p-3 relative"
        >
          <span className='text-black'>
            <ion-icon name="funnel" size="large"></ion-icon>
          </span>
        </button>
                 {showDropdown && (
            <div className="absolute border bg-blue-100 border-solid border-2 border-blue-100 p-4 mt-72 rounded-md mt-1 z-10 "
            style={{ left: "-140px", width: "200px" }}>
          
              <div className='pb-2 flex  text-indigo-700 font-bold cursor-pointer' onClick={()=>setFilter('keyword.name')}>-Les mots clés</div>
              <div className='pb-2 flex  text-indigo-700 font-bold cursor-pointer ' onClick={()=>setFilter('authors.name')}>-Les auteurs</div>
              <div className='pb-2 flex  text-indigo-700 font-bold cursor-pointer' onClick={()=>setFilter('keyword.name')}>-Les institutions</div>
              <div className='pb-2 flex text-indigo-700 font-bold cursor-pointer' onClick={()=>setFilter('keyword.name')}>-Période entre deux dates de publication</div>
            </div>
          )}
        </div>
      </div>

      {/* Affichage du résultat de la recherche */}
      {articles.map((article, index) => (

      <div>
<Titrearticle
  article={{
    titre: article.title,
    auteur: article.authors.map((author, index) => <span key={index}>{author.name}, </span>),
    institutions: article.institutions.map((institution, index) => <span key={index}>{institution.name}, </span>),
    resume: article.abstract,
    motsCles: article.keywords.map((keyword, index) => <span key={index}>{keyword.name}, </span>),
    references: article.references.map((reference, index) => <span key={index}>{reference.citation}, </span>),
    pdf: article.pdf_url,
    textuel: article.textuel,
  }}
/>
      </div>
      ))}
    </>
  );
}
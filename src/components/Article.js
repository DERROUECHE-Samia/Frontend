import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faEdit, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Article = ({ article }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const id = localStorage.getItem('id');
  const type = localStorage.getItem('type');
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleEditArticle = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/update-article/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the updated data directly
      });
  
      if (response.ok) {
        console.log('Information changed successfully');
        alert('Succès');
        navigate(`/home/${type}`);
        setEditMode(!editMode);
      } else {
        alert('Erreur');
        console.error('Error:', data.detail);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const treatArticle =  async(articleId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/treat-article/${articleId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Article treated successfully');
        alert('succés');
        // Additional logic after successful treatment
      } else {
        const data = await response.json();
        console.error('Error treating article:', data.error);
        // Handle error, display message, etc.
      }
    } catch (error) {
      console.error('Error treating article:', error);
      // Handle error, display message, etc.
    }
  };
  
  const handleSave = (id) => {
    treatArticle(id);
    handleEditArticle(id)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchArticle = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/article-details/${article.id}`);
      const data = await response.json();
      setData(data); // Corrected line
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const ajouterFav = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/add-article/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          utilisateur_id: id,
          article_id: article.id,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Information changed successfully');
        alert('Succès');
        window.location.reload();
      } else {
        alert('Erreur');
        console.error('Error:', data.detail);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erreur');
    }
  };

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
    ajouterFav();
  };

  useEffect(() => {
  }, []);

  return (
    <div className='w-full border-2 border-gray-400 rounded-xl p-4 mt-4 bg-transparent'>
      <div className="pt-4">
        <p className="pr-2 font-bold">Titre: </p>
        {editMode ? (
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        ) : (
          <p>{data.title}</p>
        )}
      </div>

      <div className="pt-4">
        <p className="pr-2 font-bold">Auteurs: </p>
        {editMode ? (
          <input
            type="text"
            name="authors_names"
            value={data.authors_names}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        ) : (
          <p>{data.authors_names}</p>
        )}
      </div>

      <div className="pt-4">
        <p className="pr-2 font-bold">Institutions: </p>
        {editMode ? (
          <input
            type="text"
            name="institutions_names"
            value={data.institutions_names}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        ) : (
          <p>{data.institutions_names}</p>
        )}
      </div>

      <div className="pt-4">
        <p className="pr-2 font-bold">Résumé: </p>
        {editMode ? (
          <textarea
            name="abstract"
            value={data.abstract}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        ) : (
          <p>{data.abstract}</p>
        )}
      </div>

      <div className="pt-4">
        <p className="pr-2 font-bold">Mots clés: </p>
        {editMode ? (
          <input
            type="text"
            name="keywords_names"
            value={data.keywords_names}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        ) : (
          <p>{data.keywords_names}</p>
        )}
      </div>

      <div className="pt-4">
        <p className="pr-2 font-bold">Références: </p>
        {editMode ? (
          <input
            type="text"
            name="references_citations"
            value={data.references_citations}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        ) : (
          <p>{data.references_citations}</p>
        )}
      </div>

      <div className="pt-4">
        <Link to={data.pdf_url}>
          <p className="pr-2 font-bold">Le lien pdf: </p>
        </Link>
      </div>

      <div className="pt-4 pb-8">
        <p className="pr-2 font-bold">L'article en format textuel: </p>
        {editMode ? (
          <textarea
            name="text"
            value={data.text}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        ) : (
          <p>{data.text}</p>
        )}
      </div>

      <div className="pt-4">
        {type === 'utilisateur' ? (
          <div
            className={`cursor-pointer`}
            onClick={handleHeartClick}
          >
            <ion-icon name="heart" size="large" style={{ color: isFavorite ? 'red' : 'black' }}></ion-icon>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none mr-2"
              onClick={() => treatArticle(article.id)}
            >
              <FontAwesomeIcon icon={faCheck} className="mr-1" />
            </button>
            {editMode ? (
              <button
                className="flex items-center justify-center bg-red-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none mr-2"
                onClick={() => handleEditArticle(article.id)}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-1" />
              </button>
            ) : (
              <button
                className="flex items-center justify-center bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none mr-2"
                onClick={handleEdit}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-1" />
              </button>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
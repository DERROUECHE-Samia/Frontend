import React, { useState } from 'react';


/**
 * Composant représentant la section "Rencontrer Notre Équipe".
 * @component
 *
 * @returns {JSX.Element} - Élément React représentant la section.
 */


const Nav1 = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState();
  const handleCircleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    console.log("Déconnexion...");
  };

  return (
    <nav className="bg-indigo-200 p-4 flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-black mr-1 pt-2">
            <ion-icon name="bug"></ion-icon>
          </span>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block">Designer</span>
            
            <a href="/profile" className="text-white hover:text-pink-300">
              Profil
            </a>
            <a
              href="/favorites"
              className="text-pink-700 hover:text-pink-300 font-[Kanit]"
            >
              Mes Favoris
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 md:mt-0 relative font-[Poppins]">
        {user && (
          <div >
          <div className="flex items-center mb-2 pb-4 mt-4">
          <div>
                    <p className="font-bold text-indigo-800">{user.fullName}</p>
                    <p className="text-indigo-800">{user.name}</p>
                  </div>
          <div
              className="bg-white border-indigo-800 rounded-full h-10 w-10 flex items-center justify-center text-indigo-800 font-bold ml-4 cursor-pointer"
              onClick={handleCircleClick}
          >
              {user.name.charAt(0).toUpperCase()}
            </div>
                 
                </div>
            
            
            {showMenu && user.name && (
  <div className="absolute bg-indigo-800 border border-indigo-800 p-4 rounded-md mt-1 z-10  pb-12 " 
       style={{ left: "-120px", width: "200px" }}>
    {/* Contenu du rectangle à afficher */}
    <div className="flex items-center mb-2 pb-4 ">
                  <div className="bg-white border-white rounded-full h-8 w-8 flex items-center justify-center text-indigo-700 font-bold mr-2">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-white">{user.fullName}</p>
                    <p className="text-white" >{user.name}</p>
                  </div>
      </div>
    <a href="/settings" className="text-white font-serif hover:underline block mb-2">
      Paramètres du compte
    </a>
    <button onClick={handleLogout} className="text-white font-serif hover:underline block">
      Se déconnecter
    </button>
  </div>
)}
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav1;

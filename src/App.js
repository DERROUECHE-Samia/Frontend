import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Recherche from './containers/Recherche';
import Home from './containers/Home';
import Connexion from './containers/Connexion';
import Inscription from './containers/Inscription';
import MesFavoris from './containers/MesFavoris';
import './App.css';
import ThanksPage from './containers/ThanksPage';
import Pageadmin from './containers/Pageadmin';
import Parmetres from './containers/Parametre_compte'
import PageModer from './containers/PageModer';

function App() {
  return (
    
    <Router>
      <Routes>
       <Route path="/login" element={<Connexion />} />
       
       <Route path="/l" element={<Parmetres />} />
        <Route path="" element={<Home/>} />
        <Route path="/signin" element={<Inscription />} />
        <Route path="/thanks" element={<  ThanksPage />} />
        <Route path="/:typ/:usern" element={<  Parmetres />} />
        <Route path="/home/utilisateur" element={<  Recherche />} />
        <Route path="/home" element={<  Recherche />} />
        <Route path="/home/moderateur" element={<  PageModer />} />

        <Route path="/home/admin" element={<  Pageadmin />} />
        <Route path="/favoris" element={<  MesFavoris />} />


      </Routes>
    </Router> 

   

     
     
    

     
    );
  }
  
 

export default App;

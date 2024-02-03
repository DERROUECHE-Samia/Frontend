import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav1 from './compenents/Nav1';
import NavAdmin from './compenents/NavAdmin';

import Recherche from './compenents/Recherche';
import Home from './compenents/Home';
import Connexion from './compenents/Connexion';
import Moderateur from './containers/Moderateur';
import User from  './containers/User';
import Admin from './containers/Admin';
import Inscription from './compenents/Inscription';
import MesFavoris from './compenents/MesFavoris';
import './App.css';
import ThanksPage from './compenents/ThanksPage';
import Pageadmin from './compenents/Pageadmin';
import Parmetres from './compenents/Parametre_compte'
import PageModer from './compenents/PageModer';

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

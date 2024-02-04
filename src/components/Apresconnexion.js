import React from "react";
import Recherche from "./Recherche";
import Nav1 from "./Nav1";

/**
 * Composant représentant la vue après la connexion de l'utilisateur.
 *
 * @param {object} user - Les informations sur l'utilisateur.
 * @param {string} user.name - Le nom de l'utilisateur.
 * @param {string} user.fullName - Le nom complet de l'utilisateur.
 * @param {string} user.mail - L'adresse e-mail de l'utilisateur.
 * @returns {JSX.Element} Composant React représentant la vue après la connexion.
 */

export default function Apresconnexion(user) {
  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Nav1 user={{ name: user.name, fullName: user.fullName , mail:user.mail}}/>
      </div>

      <div>
          <Recherche />
      </div>
    </>
  );
}
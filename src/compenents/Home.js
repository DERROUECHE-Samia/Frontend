import React from "react";
import Home1 from "./Home1";
import Home4 from "./Home4";
import Home3 from "./Home3";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";


/**
 * Composant représentant la page d'accueil de l'application.
 *
 * @component
 * @returns {JSX.Element} Composant React représentant la page d'accueil.
 */


export default function Home() {
  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <Nav />
      </div>

      <div>
        <section id="section1"> {/* Ajoutez un ID unique pour chaque section */}
          <Home1 />
        </section>
        <section id="section2">
          <Home4 />
        </section>
        <section id="section3">
          <Home3 />
        </section>
        <section id="section4">
          <About />
        </section>
        <section id="section5">
          <Footer />
        </section>
        
      </div>
    </>
  );
}

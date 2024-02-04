import React, { useEffect, useState } from "react";
import img from '../images/Group 3.png';

/**
 * Composant représentant la quatrième section de la page d'accueil avec une image en défilement.
 *
 * @component
 * @returns {JSX.Element} Composant React représentant la quatrième section.
 */

export default function Home4() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById("lazy-image");
      if (image) {
        const { top } = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Show the image when it comes into view (when it's within the viewport)
        if (top <= windowHeight * 0.75) {
          setShowImage(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative pt-44 max-w-3xl mx-auto overflow-hidden">
      <div
        className={`w-full h-full max-w-full mx-auto transform transition-transform duration-5000 ${
          showImage ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: '150%', height: '100%' }} // Ajustez ces valeurs en fonction de vos besoins
      >
        <img
          id="lazy-image"
          src={img}
          alt="Description de l'image"
          className="w-full h-full max-w-full mx-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Article from './Article';

const Titrearticle = ({ article }) => {
    const [showArticle, setShowArticle] = useState(false);

    const handleAddClick = () => {
        setShowArticle(!showArticle);
    }

    return (
        <div className="md:pl-8 md:pr-96">
            <div className="pr-4 pb-4 md:pr-0 flex items-center">
                <div className="flex-1">
                    <div className="pt-4 font-bold font-serif text-2xl">
                        {article.titre}
                    </div>
                </div>
                <div
                    className={`cursor-pointer`}
                    onClick={handleAddClick}
                >
                    <ion-icon name="add-circle-outline" size="large"></ion-icon>
                </div>
            </div>

            {/* Afficher le composant Article si showArticle est true */}
            {showArticle && (
                <Article
                    article={{
                        titre:article.titre,
                        auteur:article.auteur,
                        institution: article.institution,
                        resume:article.resume,
                        motcle: article.motcle,
                        reference: article.reference,
                        pdf: article.pdf,
                        textuel: article.textuel
                    }}
                />
            )}
        </div>
    );
};

export default Titrearticle;

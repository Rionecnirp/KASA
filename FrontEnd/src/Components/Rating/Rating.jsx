import React from 'react';
import './Rating.css'

/** Ce composant retourne :
 * Un div contenant un array d'étoiles.
 * l'Array est (normalement) de 5 étoiles.
 * Dans cet Array, on compare le rating du logement à l'index. On place un nombre d'étoiles pleines équivalent au rating et on place des étoiles "vides" pour arriver jusqu'à 5 (si besoin)
 */

const Rating = ({ stars }) => {
    const FullStar = <i data-testid="full-star" className="fa-solid fa-star fa-xl"></i>
    const EmptyStar = <i data-testid="empty-star" className="fa-solid fa-star fa-xl empty"></i>

    return (
        <div className='rating'>
            {Array.from({ length: 5 }, (_, index) => (
                <span className='star' key={index}>
                    {index < stars ? FullStar : EmptyStar}
                </span>
            ))}
        </div>
    );
};

export default Rating;
import React, { useState } from 'react';
import Arrow from '../../assets/Arrow.png'
import './Collapse.css'

/** Ce composant retourne :
 * Un article qui contient 2 divs.
 * Le premier div contient le titre du collapse et le bouton qui permet de faire apparaitre le second div.
 * Le second div contient le texte du collapse.
 * Dépendant de l'état du bouton, on affiche le texte.
 */

const Collapse = ({title, text}) => {
    const [ArrowUp, ArrowDown] = useState(false)

    return (
        <article className='collapseContainer'>
            <div className='collapseTitle' >
                <p>{title}</p>
                <img
                    className={`arrow ${ArrowUp ? 'Up' : ''}`}
                    onClick={() => ArrowDown(!ArrowUp)}
                    src={Arrow}
                    alt="arrow up"
                    role="button"
                />
            </div>
            <div className={`collapseText ${ArrowUp ? 'Out' : ''}`}>
                {text}
                </div>
        </article>
       
    )
};

export default Collapse;

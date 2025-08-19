import React from 'react';
import Rating from '../Rating/Rating';
import './Host.css'

/** Ce composant retourne :
 * Un article qui contient 1 div qui regroupe toutes les informations sur l'hôte du logement.
 * Plus spécifiquement : le nom de l'hôte et son image de profil
 * Accessoirement, on montre aussi le composant "Rating", qui sert à montrer le nombre d'étoiles du logement.
 */

const Host = ({name, picture, rating}) => {
    return (
        <article className='InformationsHoteLogement'>
                        <div className='HostInfo'>
                            <h3 className='HostName'>{name}</h3>
                            <img className='HostPicture'
                                src={picture}
                                alt={`photo de profil de ${name}`}
                            />
                        </div>
                        <Rating stars={rating} />
                    </article>
    );
};

export default Host;
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './card.css'

const Card = ({id, cover, title}) => {
    
    return (
        <NavLink to={`Logement/${id}`} className='card'>
            <article key={id} >
                <img src={cover} alt="" />
                <p className='p_logement'>
                    {title}
                </p>
            </article>
        </NavLink>
    );
};

export default Card;
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Components/card.css'

const Card = ({id, cover, title}) => {
    
    return (
        <NavLink to={`Logement/${id}`}>
            <div key={id} className='card'>
                <img src={cover} alt="" />
                <div>
                    {title}
                </div>
            </div>
        </NavLink>
    );
};

export default Card;
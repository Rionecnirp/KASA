import React from 'react';

const Appartment = ({title, location, tags}) => {
    return (
        <div className='InformationsLogement'>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{tags}</p>
        </div>
    );
};

export default Appartment;
import React from 'react';
import Rating from '../Rating/Rating';

const Host = ({name, picture, rating}) => {
    return (
        <div className='InformationsHoteLogement'>
                        <p>{name}</p>
                        <img
                            src={picture}
                            alt=""
                        />
                        <Rating stars={rating} />
                    </div>
    );
};

export default Host;
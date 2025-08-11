import React from 'react';
import Rating from '../Rating/Rating';
import './Host.css'

const Host = ({name, picture, rating}) => {
    return (
        <article className='InformationsHoteLogement'>
                        <div className='HostInfo'>
                            <h3 className='HostName'>{name}</h3>
                            <img className='HostPicture'
                                src={picture}
                                alt=""
                            />
                        </div>
                        <Rating stars={rating} />
                    </article>
    );
};

export default Host;
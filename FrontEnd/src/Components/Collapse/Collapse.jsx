import React, { useState } from 'react';
import Arrow from '../../assets/Arrow.png'
import './Collapse.css'

const Collapse = ({title, text}) => {
    const [ArrowUp, ArrowDown] = useState(false)

    return ArrowUp ? (
        <article className='collapseContainer'>
            <div className='collapseTitle' onClick={() => ArrowDown(false)}>
                <p>{title}</p>
                <img
                src={Arrow}
                alt="arrow up"
                role="button"
                />
            </div>
            <div className='collapseText'>
                {text}
            </div>
        </article>
       
    ) : (
        <article className='collapseContainer'>
            <div className='collapseTitle' onClick={() => ArrowDown(true)}>
                <p>{title}</p>
                <img
                src={Arrow}
                alt="arrow down"
                role="button"
                />
            </div>
        </article>
        
    );
};

export default Collapse;

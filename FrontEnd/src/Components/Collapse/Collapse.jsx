import React, { useState } from 'react';
import Arrow from '../../assets/Arrow.png'
import './Collapse.css'

const Collapse = ({title, text}) => {
    const [ArrowUp, ArrowDown] = useState(false)

    return ArrowUp ? (
        <>
             <div className='collapse' onClick={() => ArrowDown(false)}>
            <p>{title}</p>
            <img
            src={Arrow}
            alt="arrow up"
            role="button"
            />
            </div>
            <p>{text}</p>
        </>
       
    ) : (
        <>
            <div className='collapse' onClick={() => ArrowDown(true)}>
                <p>{title}</p>
                <img
                src={Arrow}
                alt="arrow down"
                role="button"
                />
            </div>
        </>
        
    );
};

export default Collapse;

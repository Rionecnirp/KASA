import React, { useState } from 'react';
import Arrow from '../assets/Arrow.png'
import '../Styles/Components/Collapse.css'

const Collapse = ({title, text}) => {
    const [ArrowUp, ArrowDown] = useState(false)

    return ArrowUp ? (
        <div>
             <div className='collapse' onClick={() => ArrowDown(false)}>
            {title}
            <img
            src={Arrow}
            alt="arrow up"
            role="button"
            />
            </div>
            <div>{text}</div>
        </div>
       
    ) : (
        <div>
            <div className='collapse' onClick={() => ArrowDown(true)}>
                {title}
                <img
                src={Arrow}
                alt="arrow down"
                role="button"
                />
            </div>
        </div>
        
    );
};

export default Collapse;

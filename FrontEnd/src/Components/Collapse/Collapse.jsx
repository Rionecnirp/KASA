import React, { useState } from 'react';
import Arrow from '../../assets/Arrow.png'
import './Collapse.css'

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

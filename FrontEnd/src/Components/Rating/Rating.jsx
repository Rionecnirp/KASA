import React from 'react';
import './Rating.css'

const Rating = ({ stars }) => {
    const FullStar = <i class="fa-solid fa-star fa-xl"></i>
    const EmptyStar = <i class="fa-solid fa-star fa-xl empty"></i>

    return (
        <div className='rating'>
            {Array.from({ length: 5 }, (_, index) => (
                <span className='star' key={index}>
                    {index < stars ? FullStar : EmptyStar}
                </span>
            ))}
        </div>
    );
};

export default Rating;
import React from 'react';
import { useParams } from 'react-router-dom';
import UseEffectProperties from '../UseEffectProperties/UseEffectProperties';

const Rating = ({ stars }) => {
    const Rate = []
    const { id } = useParams()
    const { infoProperties, hasError, isLoading } = UseEffectProperties(id)
    const FullStar = <i class="fa-solid fa-star"></i>
    const EmptyStar = <i class="fa-regular fa-star"></i>

    if (isLoading) return <p>Chargement...</p>;
    if (hasError || !infoProperties) return <p>Erreur de chargement</p>;

    for (let index = 0; index < 5; index++) {
        Rate[index] = index < stars
    }

    return (
        <div className='rating'>
            {Rate.map((isFull, index) => (
                <span key={index}>
                    {isFull ? FullStar : EmptyStar}
                </span>
            ))}
        </div>
    );
};

export default Rating;
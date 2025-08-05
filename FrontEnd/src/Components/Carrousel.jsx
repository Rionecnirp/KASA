import React from 'react';
import UseEffectProperties from './UseEffectProperties';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Caroussel = ({ images }) => {
    const { id } = useParams()
    const { infoProperties, hasError, isLoading } = UseEffectProperties(id)
    const [Index, SetIndex] = useState(0)
    const NbSlides = images.length

    if (isLoading) return <p>Chargement...</p>;
    if (hasError || !infoProperties) return <p>Erreur de chargement</p>;

    console.log(images)
    const NextSlide = () => {
        SetIndex((Index) => Index === NbSlides - 1 ? 0 : Index + 1,)
    }

    const PreviousSlide = () => {
        SetIndex((Index) => Index === 0 ? NbSlides - 1 : Index - 1,)
    }
    
    if (NbSlides === 1) {
        return (
            <section className='caroussel'>
                <img src={images[0]} alt={`Slide ${Index + 1}`} />
            </section>
        )
    }


    return (
        <section className='caroussel'>
            <button onClick={PreviousSlide}></button>
            <img src={images[Index]} alt={`Slide ${Index + 1}`} />
            <button onClick={NextSlide}></button>
            <div>{Index + 1} / {NbSlides}</div>
        </section>
    );
};

export default Caroussel;

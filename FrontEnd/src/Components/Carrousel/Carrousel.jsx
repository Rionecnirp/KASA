import UseEffectProperties from '../UseEffectProperties/UseEffectProperties';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './Carrousel.css'
import ArrowLeft from '../../assets/arrow_left.png'
import ArrowRight from '../../assets/arrow_right.png'

/** Ce composant retourne :
 * Une section contenant 2 boutons (pour avancer/reculer dans la gallerie d'images), une image/gallerie d'images et un compteur pour savoir à quelle image dans la gallerie on se trouve.
 * S'il n'y a qu'une image dans la gallerie, alors pas de compteur ni de boutons.
 * NextSlide/PreviousSlide servent de fonctions pour les boutons.
 */

const Carrousel = ({ images }) => {
    const { id } = useParams()
    const { infoProperties, hasError, isLoading } = UseEffectProperties(id)
    const [Index, SetIndex] = useState(0)
    const NbSlides = images.length

    if (isLoading) return <p>Chargement...</p>;
    if (hasError || !infoProperties) return <p>Erreur de chargement</p>;

    const NextSlide = () => {
        SetIndex((Index) => Index === NbSlides - 1 ? 0 : Index + 1,)
    }

    const PreviousSlide = () => {
        SetIndex((Index) => Index === 0 ? NbSlides - 1 : Index - 1,)
    }
    
    if (NbSlides === 1) {
        return (
            <section className='carrousel'>
                <img className='picture' src={images[0]} alt={`Slide ${Index + 1}`} />
            </section>
        )
    }


    return (
        <section className='carrousel'>
            <button className='leftBtn carrouselBtn'>
                <img src={ArrowLeft} onClick={PreviousSlide} alt="" />
            </button>
            <img className='picture' src={images[Index]} alt={`Slide ${Index + 1}`} />
            <button className='rightBtn carrouselBtn'>
                <img src={ArrowRight} onClick={NextSlide} alt="" />
            </button>
            <div className='counter'>{Index + 1} / {NbSlides}</div>
        </section>
    );
};

export default Carrousel;

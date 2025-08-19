import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './cards.css';

/** Ce composant retourne :
 * Un useState "léger" où on récupère les informations des logements.
 * Il devrait être possible d'améliorer le composant en passant par le composant UseEffectProperties.jsx ? Cela demanderait de retravailler le composant.
 * Une section où on place un ou plusieurs composants Card.
 */

const Cards = () => {

    const [properties, setProperties] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
        .then((res) => res.json())
        .then((data) => setProperties(data))
        .catch((err) => console.error(err))
    }, [])

    return (
        <section className='cards'>
            {properties.map((property) => (
                <Card 
                key={property.id}
                id={property.id}
                cover={property.cover} 
                title={property.title} />
            )
        )}
        </section>
    );
};

export default Cards;
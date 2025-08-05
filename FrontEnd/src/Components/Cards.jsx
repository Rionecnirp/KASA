import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../Styles/Components/cards.css'

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
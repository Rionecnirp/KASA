import React, { useEffect, useState } from 'react';
import Navigation from '../Components/Navigation';
import Collapse from '../Components/Collapse';
import { useParams } from 'react-router-dom';
import Error from './Error';
import UseEffectProperties from '../Components/UseEffectProperties';
import Carrousel from '../Components/Carrousel';

const Logement = () => {
    const { id } = useParams()
    const { infoProperties, hasError, isLoading } = UseEffectProperties(id)

    if (hasError) return <Error />
    if (isLoading) return <p>Chargement en cours...</p>

    return (
        <>
            <Navigation />
            <Carrousel images={infoProperties.pictures} alt={infoProperties.title} />
            <section>
                <div>
                    <h2>{infoProperties.title}</h2>
                    <p>{infoProperties.location}</p>
                    <p>{infoProperties.tags}</p>
                </div>
                <div>
                    <h2>{infoProperties.title}</h2>
                    <p>{infoProperties.host.name}</p>
                    <img
                        src={infoProperties.host.picture}
                        alt=""
                    />
                    <div></div>
                    <p>{infoProperties.tags}</p>
                </div>
            </section>
            <section>
                <Collapse
                    title="Description"
                    text="couac"
                />
                <Collapse
                    title="Equipement"
                    text="couac"
                />
            </section>
        </>
    );
};

export default Logement;
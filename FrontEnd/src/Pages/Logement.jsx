import React, { useEffect, useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Collapse from '../Components/Collapse/Collapse';
import { useNavigate, useParams } from 'react-router-dom';
import Error from './Error';
import UseEffectProperties from '../Components/UseEffectProperties/UseEffectProperties';
import Carrousel from '../Components/Carrousel/Carrousel';
import Footer from '../Components/Footer/Footer';

const Logement = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { infoProperties, hasError, isLoading } = UseEffectProperties(id)

    useEffect(() => {
        if (hasError) {
            navigate('/*')
        }
    }, [hasError, navigate])
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
            <Collapse
                 title="Description"
                 text={infoProperties.description}
            />
            <Collapse
                title="Equipement"
                text={infoProperties.equipments}
            />
            
            <Footer />
        </>
    );
};

export default Logement;
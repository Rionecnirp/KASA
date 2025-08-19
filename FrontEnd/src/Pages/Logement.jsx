import React, { useEffect } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Collapse from '../Components/Collapse/Collapse';
import { useNavigate, useParams } from 'react-router-dom';
import UseEffectProperties from '../Components/UseEffectProperties/UseEffectProperties';
import Carrousel from '../Components/Carrousel/Carrousel';
import Footer from '../Components/Footer/Footer';
import Host from '../Components/Host/Host';
import Appartment from '../Components/Appartment/Appartment';
import '../Style/Logement.css'

/* 
*/

const Logement = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { infoProperties, hasError, isLoading } = UseEffectProperties(id)

    useEffect(() => {
        if (!isLoading && hasError) {
            navigate('/*')
        }
    }, [hasError, navigate])
    if (isLoading) return <p>Chargement en cours...</p>
    if (!infoProperties) return null

    return (
        <>
            <Navigation />
            <main>
                <Carrousel images={infoProperties.pictures} alt={infoProperties.title} />
                
                <section className='Logement'>
                    <Appartment
                    title={infoProperties.title} 
                    location={infoProperties.location}
                    tags={infoProperties.tags}
                    />
                    <Host
                    name={infoProperties.host.name}
                    picture={infoProperties.host.picture}
                    rating={infoProperties.rating}
                    />
                </section>

                <section className='CollapseLogement'>
                    <Collapse
                    title="Description"
                    text={infoProperties.description}
                    />
                    <Collapse
                        title="Equipement"
                        text={infoProperties.equipments.map((equipment, index) => (
                            <span key={index}>{equipment}</span>
                        ))}
                    />
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Logement;
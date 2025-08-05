import React, { useEffect, useState } from 'react';
import Navigation from '../Components/Navigation';
import Collapse from '../Components/Collapse';
import { useParams } from 'react-router-dom';
import Error from './Error';

const Logement = () => {
    const { id } = useParams()
    const [infoLogement, SetInfoLogement] = useState(null)

    useEffect(() => {
            fetch(`http://localhost:8080/api/properties/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Not found')
                }
                return res.json()
            })
            .then((data) => SetInfoLogement(data))
            .catch((err) => console.error(err))
        }, [id])

    if(!infoLogement || !infoLogement.id) {
        return <Error />
    }

    return (
        <div>
            <Navigation />
            <section>
                <div>
                    <h2>{infoLogement.title}</h2>
                    <p>{infoLogement.location}</p>
                    <p>{infoLogement.tags}</p>
                </div>
                <div>
                    <h2>{infoLogement.title}</h2>
                    <p>{infoLogement.host.name}</p>
                    <img
                        src={infoLogement.host.picture}
                        alt=""
                    />
                    <div></div>
                    <p>{infoLogement.tags}</p>
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
            <h1>Logement</h1>
        </div>
    );
};

export default Logement;
import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeBanner from '../../assets/HomeBanner.jpg'
import AboutBanner from '../../assets/AboutBanner.jpg'
import './banner.css'

const Banner = () => {
    const path = useLocation().pathname
    const location = path.split("/")[1]

    return (
        <>
            {location === 'about' ? ( 
                <section className="banner_about">
                    <img
                    src={AboutBanner}
                    alt="chaine de montagnes enneigée"
                    />
                </section>
            ) : (
                <section className="banner_home">
                    <img
                    src={HomeBanner}
                    alt="cote rocheuse bord de mer"
                    />
                    <h1>Chez vous, partout et ailleurs</h1>
                </section>
            )}
        </>
    );
};

export default Banner;
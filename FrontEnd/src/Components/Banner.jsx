import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeBanner from '../assets/HomeBanner.jpg'
import AboutBanner from '../assets/AboutBanner.jpg'
import '../Styles/Components/banner.css'

const Banner = () => {
    const path = useLocation().pathname
    const location = path.split("/")[1]

    return (
        <div>
      {location === 'about' ? ( // on demande si l'on se trouve sur la page "à propos" alors on affiche ceci
        <section className="banner">
            <img
              src={AboutBanner}
              alt="chaine de montagnes enneigée"
            />
        </section>
      ) : (
        // si on ne se trouve pas sur la page "à propos" alors on affiche cela
        <section className="banner">
            <img
              src={HomeBanner}
              alt="cote rocheuse bord de mer"
            />
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
      )}
    </div>
    );
};

export default Banner;
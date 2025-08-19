import { useLocation } from 'react-router-dom';
import HomeBanner from '../../assets/HomeBanner.jpg'
import AboutBanner from '../../assets/AboutBanner.jpg'
import './banner.css'

/** Ce composant retourne :
 * Une section avec l'image de la bannière.
 * Dépendant du chemin, une image différente est utilisée.
 */

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
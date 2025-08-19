import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer/Footer'
import '../Style/Error.css'
import Navigation from '../Components/Navigation/Navigation';

/** Page d'erreur 404, qui sert à chaque fois que l'URL de la page ne correspond à aucune page spécifique. Dans cette dernière il y a :
* Le composant "Navigation", qui sert de Header.
* Un main avec le code HTML minimum pour spécifier une erreur.
* Un lien pour renvoyer à la page d'accueil.
* Le composant "Footer", qui sert de Footer.
 */

const Error = () => {
    return (
        <>
            <Navigation />
            <main className='Error'>
                <h1>404</h1>
                <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                <NavLink to="/">
                    <span>
                        Retournez sur la page d’accueil
                    </span>
                </NavLink>
            </main>
            <Footer />
        </>
        
    );
};

export default Error;
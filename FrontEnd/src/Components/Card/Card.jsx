import { NavLink } from 'react-router-dom';
import './card.css';

/** Ce composant retourne :
 * Un article avec l'image du logement et le titre du logement.
 * Un lien permet de renvoyer au logement approprié via son id.
 */

const Card = ({id, cover, title}) => {
    
    return (
        <NavLink to={`Logement/${id}`}>
            <article className='card' key={id} >
                <img src={cover} alt="" />
                <p className='p_logement'>
                    {title}
                </p>
            </article>
        </NavLink>
    );
};

export default Card;
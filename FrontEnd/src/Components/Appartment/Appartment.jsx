import './Appartment.css'

/** Ce composant retourne :
 * Un article avec un titre (nom de l'appartement),
 * une location (le lieu où se trouve l'appartement (la ville))
 * et un ou plusieurs tags (système qui ne sert actuellement à rien, autre que d'afficher les tags mis en place sur le logement)
 */

const Appartment = ({title, location, tags}) => {
    return (
        <article className='InformationsLogement'>
            <h2>{title}</h2>
            <h3>{location}</h3>
            <div className='Tags'>{tags.map((tag, index) => (
                <span key={index} className='Tag'>{tag}</span>
            ))}</div>
        </article>
    );
};

export default Appartment;
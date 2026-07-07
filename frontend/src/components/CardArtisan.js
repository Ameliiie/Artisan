import "./CardArtisan.css";
import { Link } from "react-router-dom";

function CardArtisan(props) {

    /*  Conversion de la note en nombre pour gestion de l'affichage étoiles*/
    const note = Number(props.note);
    const etoiles = [];

    /*  Génère les 5 étoiles vide ou pleine selon la note de l'artisan*/

    for (let i = 1; i <= 5; i++) {

        if (i <= Math.floor(note)) {

            etoiles.push(
                <i
                    key={i}
                    className="bi bi-star-fill text-warning"
                ></i>
            );

        } else if (i - note <= 0.5) {

            etoiles.push(
                <i
                    key={i}
                    className="bi bi-star-half text-warning"
                ></i>
            );

        } else {

            etoiles.push(
                <i
                    key={i}
                    className="bi bi-star text-warning"
                ></i>
            );
        }
    }

    return (

        /* Lien vers la fiche de l'artisan */

        <Link
            to={`/artisan/${props.id}`}
            className="text-decoration-none text-dark"
        >
            <article className="card-artisan">

                <img
                    src={`/images/${props.image}`}
                    alt={props.nom}
                />

                <h3>{props.nom}</h3>

                <p>{props.specialite}</p>

                <p>{props.ville}</p>

                <p>
                    {etoiles} {props.note}
                </p>

            </article>
        </Link>
    );
}

export default CardArtisan;
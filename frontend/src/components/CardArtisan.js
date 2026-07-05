import "./CardArtisan.css";
import artisanImage from "../assets/images/artisan.jpg";
import { Link } from "react-router-dom";

function CardArtisan(props) {
    return (
        <Link to={`/artisan/${props.id}`} className="text-decoration-none text-dark">
            <article className="card-artisan">

                <img src={artisanImage} alt={props.nom} />

                <h3>{props.nom}</h3>

                <p>{props.specialite}</p>

                <p>{props.ville}</p>

                <p><i className="bi bi-star-fill text-warning"></i> {props.note}</p>
<p className="text-warning">
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
</p>
            </article>
        </Link>
    );
}


export default CardArtisan;

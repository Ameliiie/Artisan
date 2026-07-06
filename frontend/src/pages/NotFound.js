import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="container text-center my-5 not-found">

      <img
       src="/images/notfound.jpg"
        alt="Page introuvable"
        className="img-fluid mb-4"
      />

      <h1>Page non trouvée</h1>

      <p className="fs-5">
        La page que vous recherchez est introuvable
      </p>
      <Link to="/" className="btn btn-home">
        Retour à l'accueil
      </Link>

    </main>
  );
}

export default NotFound;
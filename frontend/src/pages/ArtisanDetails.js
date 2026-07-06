import { useParams } from "react-router-dom";
import artisans from "../data/artisans";

function ArtisanDetails() {

  const { id } = useParams();

  const artisan = artisans.find(
    (artisan) => artisan.id === Number(id)
  );

  if (!artisan) {
    return (
      <main className="container my-5">
        <h2>Artisan introuvable</h2>
      </main>
    );
  }

  return (
    <main className="container my-5">

      <div className="row">

        <div className="col-lg-4 text-center">

          <img
            src={artisan.image}
            alt={artisan.nom}
            className="img-fluid rounded-circle mb-4"
          />

        </div>

        <div className="col-lg-8">

          <h1>{artisan.nom}</h1>

          <h3>{artisan.specialite}</h3>

          <p> <strong>Ville :</strong> {artisan.ville}</p>

          <p><strong>Note :</strong> ⭐ {artisan.note}</p>

          <p> <strong>Email :</strong>{" "}
            <a href={`mailto:${artisan.email}`}>
              {artisan.email}
            </a>
          </p>

          {artisan.siteWeb && (
            <p> <strong>Site web :</strong>{" "}
              <a
                href={artisan.siteWeb}
                target="_blank"
                rel="noreferrer">
                {artisan.siteWeb}
              </a>
            </p>
          )}

          <h4 className="mt-4">À propos</h4>

          <p>{artisan.aPropos}</p>

        </div>

      </div>

    </main>
  );
}

export default ArtisanDetails;
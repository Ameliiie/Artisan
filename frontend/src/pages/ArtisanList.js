import "./ArtisanList.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardArtisan from "../components/CardArtisan";

function ArtisanList() {

  const [artisans, setArtisans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const categorieSelectionnee =
    searchParams.get("categorie") || "batiment";

  useEffect(() => {
    fetch("http://localhost:3001/artisans")
      .then((response) => response.json())
      .then((data) => {
        setArtisans(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const artisansFiltres = artisans.filter((artisan) => {

    switch (categorieSelectionnee) {

      case "alimentation":
        return artisan.categorie_id === 1;

      case "batiment":
        return artisan.categorie_id === 2;

      case "fabrication":
        return artisan.categorie_id === 3;

      case "services":
        return artisan.categorie_id === 4;

      default:
        return true;

    }

  });

  return (
    <main className="container my-5">

      <h1 className="text-center mb-5">
        Découvrez les artisans de la région Auvergne-Rhône-Alpes
      </h1>

      <p className="text-center text-muted mb-4">
        Choisissez une catégorie pour afficher les artisans.
      </p>

      <div className="d-flex justify-content-center gap-4 mb-5">

        <button
          className={`btn artisan-category ${categorieSelectionnee === "batiment" ? "active" : ""}`}
          onClick={() => setSearchParams({ categorie: "batiment" })}
        >
          Bâtiment
        </button>

        <button
          className={`btn artisan-category ${categorieSelectionnee === "alimentation" ? "active" : ""}`}
          onClick={() => setSearchParams({ categorie: "alimentation" })}
        >
          Alimentation
        </button>

        <button
          className={`btn artisan-category ${categorieSelectionnee === "services" ? "active" : ""}`}
          onClick={() => setSearchParams({ categorie: "services" })}
        >
          Services
        </button>

        <button
          className={`btn artisan-category ${categorieSelectionnee === "fabrication" ? "active" : ""}`}
          onClick={() => setSearchParams({ categorie: "fabrication" })}
        >
          Fabrication
        </button>

      </div>

      <div className="row gy-5">

        {artisansFiltres.map((artisan) => (

          <div
            className="col-md-6 d-flex justify-content-center"
            key={artisan.id}
          >

            <CardArtisan
              id={artisan.id}
              nom={artisan.nom}
              specialite={artisan.specialite}
              ville={artisan.ville}
              note={artisan.note}
              image={artisan.image}
            />

          </div>

        ))}

      </div>

    </main>
  );
}

export default ArtisanList;
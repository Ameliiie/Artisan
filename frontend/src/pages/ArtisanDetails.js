import "./ArtisanDetails.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ArtisanDetails() {

  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });

  useEffect(() => {

    fetch(`http://localhost:3001/artisans/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArtisan(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [id]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      alert(data.message);

    } catch (error) {
      console.error(error);
    }
  };
  if (!artisan) {
    return (
      <main className="container my-5">
        <h2>Artisan introuvable</h2>
      </main>
    );
  }

  return (
    <main className="container my-5">

      <Link
        to="/artisans?categorie=batiment"
        className="btn btn-back mb-4" >
        Retour à la liste
      </Link>

      <div className="row">

        <div className="col-lg-4 text-center">

          <img
            src={`/images/${artisan.image}`}
            alt={artisan.nom}
            className="img-fluid rounded-circle mb-4"
          />

        </div>

        <div className="col-lg-8">

          <h1>{artisan.nom}</h1>

          <h2>{artisan.specialite}</h2>

          <p> <strong>Ville :</strong> {artisan.ville}</p>

          <p><strong>Note :</strong> ⭐ {artisan.note}</p>

          <p> <strong>Email :</strong>{" "}
            <a href={`mailto:${artisan.email}`}>
              {artisan.email}
            </a>
          </p>

          {artisan.site_web && (
            <p> <strong>Site web :</strong>{" "}
              <a
                href={artisan.siteWeb}
                target="_blank"
                rel="noreferrer">
                {artisan.siteWeb}
              </a>
            </p>
          )}

          <h3 className="mt-4">À propos</h3>

          <p>{artisan.a_propos}</p>

        </div>

      </div>

      <section className="contact-section">

        <h3 className="contact-title"> Nous contacter :</h3>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="nom"
            className="form-control"
            placeholder="Votre Nom"
            value={formData.nom}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Votre Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="objet"
            className="form-control"
            placeholder="L'objet de votre message"
            value={formData.objet}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="form-control"
            rows="6"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="btn btn-contact"
          >
            Envoyer
          </button>

        </form>

      </section>

    </main>
  );
}

export default ArtisanDetails;
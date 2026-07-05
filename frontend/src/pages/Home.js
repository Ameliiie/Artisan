import "./Home.css";
import homeImage from "../assets/images/home.jpg";
import artisans from "../data/artisans";
import CardArtisan from "../components/CardArtisan";

function Home() {

  return (
    <main className="home container">

      <section className="steps">

        <h2>Comment trouver mon artisan ?</h2>

        <div className="row align-items-center gx-5">
          <div className="col-md-6">

            <img src={homeImage} alt="Artisan en intervention" className="img-fluid" />

          </div>
          <div className="col-md-6">

            <ol className="steps-list">
              <li>Choisir la catégorie d'artisanat dans le menu</li>
              <li>Choisir un artisan</li>
              <li>Le contacter via le formulaire de contact</li>
              <li>Une réponse sera apportée sous 48h</li>
            </ol>

          </div>
        </div>
      </section>
      <section className="artisans-month">

        <h2>Nos trois artisans du mois :</h2>

        <div className="row">

          {artisans.map((artisan) => (
            <div className="col-md-4 d-flex justify-content-center" key={artisan.id}>

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

      </section>

    </main>
  );
}

export default Home;
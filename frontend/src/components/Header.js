import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

  /* Etat */
  const [recherche, setRecherche] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  /* Recherche */

  const handleSearch = (e) => {
    if (e.key === "Enter" && recherche.trim() !== "") {

      navigate(`/artisans?search=${recherche}`);

    }

  };

  /* Chargement des catégories */


  useEffect(() => {

    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);


  return (
    <header className="header d-flex align-items-center justify-content-between px-5 py-3">
      
      {/* Navigation */}

      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="Trouve ton artisan" />
      </Link>

      <nav className="navigation d-flex">
        {categories.map((categorie) => (

          <Link
            key={categorie.id}
            to={`/artisans?categorie=${categorie.nom
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")}`}
          >
            {categorie.nom}
          </Link>

        ))}
      </nav>

      {/* Barre de recherche */}

      <div className="search">
        <input
          type="search"
          placeholder="Recherche d'un artisan"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

    </header>
  );
}

export default Header;
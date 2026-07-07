import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

  const [recherche, setRecherche] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (e) => {

    if (e.key === "Enter" && recherche.trim() !== "") {

      navigate(`/artisans?search=${recherche}`);

    }

  };

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

      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="Trouve ton artisan" />
      </Link>

      <nav className="navigation d-flex gap-5">

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

      <div className="search ms-5">
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
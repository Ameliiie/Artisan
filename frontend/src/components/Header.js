import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [recherche, setRecherche] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {

    if (e.key === "Enter" && recherche.trim() !== "") {

      navigate(`/artisans?search=${recherche}`);

    }

  };
  return (
    <header className="header d-flex align-items-center justify-content-between px-5 py-3">

      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="Trouve ton artisan" />
      </Link>

      <nav className="navigation d-flex gap-5">
        <Link to="/artisans?categorie=batiment">Bâtiment</Link>
        <Link to="/artisans?categorie=alimentation">Alimentation</Link>
        <Link to="/artisans?categorie=services">Services</Link>
        <Link to="/artisans?categorie=fabrication">Fabrication</Link>
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
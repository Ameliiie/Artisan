import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  return (
   <header className="header d-flex align-items-center justify-content-between px-5 py-3">
      <Link to="/" className="logo">
        <img src={logo} alt="Trouve ton artisan" />
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
        />
      </div>
    </header>
  );
}

export default Header;
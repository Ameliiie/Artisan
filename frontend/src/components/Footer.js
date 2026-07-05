import "./Footer.css";

function Footer() {
    return (
        <footer className="footer container-fluid">
            <div className="container">
            <div className="row text-center text-md-start">

                <div className="col">
                    <p>Mentions légales</p>
                    <p>Accessibilité</p>
                </div>

                <div className="col">
                    <p>Données personnelles</p>
                    <p>Cookies</p>
                </div>

                <div className="col">
                    <p>101 cours Charlemagne</p>
                    <p>CS 20033</p>
                    <p>69269 LYON CEDEX 02</p>
                    <p>France</p>
                </div>

                <div className="col text-md-end">
                    <p>+33 (0)4 26 73 40 00</p>
                </div>

            </div>
            </div>
        </footer>
    );
}

export default Footer;
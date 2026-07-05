import bijoutier from "../assets/images/bijoutier.jpg";
import boucher from "../assets/images/boucher.jpg";
import boulanger from "../assets/images/artisan.jpg";
import chauffagiste from "../assets/images/chauffagiste.jpg";
import chocolatier from "../assets/images/chocolatier.jpg";
import coiffeur from "../assets/images/coiffeur.jpg";
import couturier from "../assets/images/couturier.jpg";
import electricien from "../assets/images/electricien.jpg";
import ferronnier from "../assets/images/ferronnier.jpg";
import fleuriste from "../assets/images/fleuriste.jpg";
import menuisier from "../assets/images/menuisier.jpg";
import plombier from "../assets/images/plombier.jpg";
import toiletteur from "../assets/images/toiletteur.jpg";
import traiteur from "../assets/images/traiteur.jpg";
import webdesign from "../assets/images/webdesign.jpg";

const artisans = [
  {
    id: 1,
    nom: "Boucherie Dumont",
    specialite: "Boucher",
    categorie: "alimentation",
    ville: "Lyon",
    note: 4.5,
    image: boucher,
  },
  {
    id: 2,
    nom: "Au pain chaud",
    specialite: "Boulanger",
    categorie: "alimentation",
    ville: "Montélimar",
    note: 4.8,
    image: boulanger,
  },
  {
    id: 3,
    nom: "Chocolaterie Labbé",
    specialite: "Chocolatier",
    categorie: "alimentation",
    ville: "Lyon",
    note: 4.9,
    image: chocolatier,
  },
  {
    id: 4,
    nom: "Traiteur Truchon",
    specialite: "Traiteur",
    categorie: "alimentation",
    ville: "Privas",
    note: 4.7,
    image: traiteur,
  },
  {
    id: 5,
    nom: "Orville Salmons",
    specialite: "Chauffagiste",
    categorie: "batiment",
    ville: "Évian-les-Bains",
    note: 5.0,
    image: chauffagiste,
  },
  {
    id: 6,
    nom: "Mont Blanc Électricité",
    specialite: "Électricien",
    categorie: "batiment",
    ville: "Chamonix",
    note: 4.9,
    image: electricien,
  },
  {
    id: 7,
    nom: "Boutot & fils",
    specialite: "Menuisier",
    categorie: "batiment",
    ville: "Annecy",
    note: 4.8,
    image: menuisier,
  },
  {
    id: 8,
    nom: "Vallis Bellemare",
    specialite: "Plombier",
    categorie: "batiment",
    ville: "Valence",
    note: 4.7,
    image: plombier,
  },
  {
    id: 9,
    nom: "Claude Quinn",
    specialite: "bijoutier",
    categorie: "fabrication",
    ville: "Moulins",
    note: 4.8,
    image: bijoutier,
  },
  {
    id: 10,
    nom: "Amitée Lécuyer",
    specialite: "Couturier",
    categorie: "fabrication",
    ville: "Roanne",
    note: 4.7,
    image: couturier,
  },
  {
    id: 11,
    nom: "Ernest Carignan",
    specialite: "Ferronier",
    categorie: "fabrication",
    ville: "Saint-Étienne",
    note: 4.9,
    image: ferronnier,
  },
  {
    id: 12,
    nom: "Royden Charbonneau",
    specialite: "Toiletteur",
    categorie: "services",
    ville: "Grenoble",
    note: 4.8,
    image: toiletteur,
  },
  {
    id: 13,
    nom: "Leala Dennis",
    specialite: "Coiffeur",
    categorie: "services",
    ville: "Lyon",
    note: 4.7,
    image: coiffeur,
  },
  {
    id: 14,
    nom: "C'est sup'hair",
    specialite: "Coiffeur",
    categorie: "services",
    ville: "Vienne",
    note: 4.8,
    image: coiffeur,
  },
  {
    id: 15,
    nom: "Le monde des fleurs",
    specialite: "Fleuriste",
    categorie: "services",
    ville: "Annecy",
    note: 4.9,
    image: fleuriste,
  },
  {
    id: 16,
    nom: "Valérie Laderoute",
    specialite: "Coiffeur",
    categorie: "services",
    ville: "Clermont-Ferrand",
    note: 4.6,
    image: coiffeur,
  },
  {
    id: 17,
    nom: "CM Graphisme",
    specialite: "Webdesigner",
    categorie: "services",
    ville: "Lyon",
    note: 5.0,
    image: webdesign,
  },
];

export default artisans;
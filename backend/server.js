import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import artisanRoutes from "./routes/artisanRoutes.js";
import categorieRoutes from "./routes/categorieRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

/* Sécurise les en-têtes HTTP de l'API */
app.use(helmet());

app.use(cors({
    origin: "http://localhost:3000"
}));

/* Déclaration des routes de l'API*/ 

app.use(express.json());
app.use("/artisans", artisanRoutes);
app.use("/categories", categorieRoutes);
app.use("/contact", contactRoutes);

/* Route de test pour vérifier que l'API est accessible*/

app.get("/", (req, res) => {
    res.json({
        message: "API Trouve ton Artisan opérationnelle 🚀"
    });
});

const PORT = process.env.PORT || 3001;

/*connexion à la base de données avant de démarrer le serveur*/

sequelize.authenticate()
    .then(() => {
        console.log("✅ Connexion MySQL réussie !");
        app.listen(PORT, () => {
            console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("❌ Erreur de connexion MySQL :", error);
    });
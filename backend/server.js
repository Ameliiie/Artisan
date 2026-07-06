import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import artisanRoutes from "./routes/artisanRoutes.js";

dotenv.config();

const app = express();

app.use(helmet());

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());
app.use("/artisans", artisanRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "API Trouve ton Artisan opérationnelle 🚀"
    });
});

const PORT = process.env.PORT || 3001;

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
import Categorie from "../models/Categorie.js";

export const getAllCategories = async (req, res) => {

    try {

        const categories = await Categorie.findAll();

        res.json(categories);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Erreur serveur",
        });

    }

};
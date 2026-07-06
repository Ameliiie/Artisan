import Artisan from "../models/Artisan.js";

export const getArtisanById = async (req, res) => {

  try {

    const artisan = await Artisan.findByPk(req.params.id);

    if (!artisan) {

      return res.status(404).json({
        message: "Artisan introuvable",
      });

    }

    res.json(artisan);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Erreur serveur",
    });

  }

};

export const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll();

    res.json(artisans);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur serveur",
    });
  }
};

export const getTopArtisans = async (req, res) => {

  try {

    const artisans = await Artisan.findAll({
      where: {
        top_artisan: true,
      },
    });

    res.json(artisans);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Erreur serveur",
    });

  }

};
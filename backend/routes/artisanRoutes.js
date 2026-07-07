import express from "express";
import { getAllArtisans,getArtisanById, getTopArtisans,} from "../controllers/artisanController.js";
const router = express.Router();

router.get("/", getAllArtisans);
router.get("/top", getTopArtisans);
router.get("/:id", getArtisanById);

export default router;
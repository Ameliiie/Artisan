import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Artisan = sequelize.define(
  "Artisan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: DataTypes.STRING,
    specialite: DataTypes.STRING,
    note: DataTypes.FLOAT,
    ville: DataTypes.STRING,
    a_propos: DataTypes.TEXT,
    email: DataTypes.STRING,
    site_web: DataTypes.STRING,
    image: DataTypes.STRING,
    top_artisan: DataTypes.BOOLEAN,
    categorie_id: DataTypes.INTEGER,
  },
  {
    tableName: "artisan",
    timestamps: false,
  }
);

export default Artisan;
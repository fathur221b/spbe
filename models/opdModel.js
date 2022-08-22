import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Opd = db.define('opds', {
    nama:{
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true,
});

export default Opd;
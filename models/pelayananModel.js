import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;



const Pelayanan = db.define('pelayanans', {
    id_opd:{
        type: DataTypes.INTEGER,
    },
    produkLayanan:{
        type: DataTypes.STRING,
    },
    standarLayanan:{
        type: DataTypes.STRING,
    },
    jenisAplikasi:{
        type: DataTypes.STRING,
    },
    keterangan:{
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true,
});

export default Pelayanan;
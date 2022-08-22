import Pelayanan from "../models/pelayananModel.js";
import Opd from "../models/opdModel.js";

Opd.hasMany(Pelayanan, {foreignKey: 'id_opd'});
Pelayanan.belongsTo(Opd, {foreignKey: 'id_opd'});

export const getAllPelayanan = async (req, res) => {
    try {
        const pelayanans = await Pelayanan.findAll({
            order: [['id_opd','ASC']],
            include: [Opd]
        });
        res.json(pelayanans);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getPelayananByOpdId = async (req, res) => {
    try {
        const pelayanan = await Pelayanan.findAll({
            where: {
                id_opd: req.params.id
            }, include: [Opd]
        });
        res.json(pelayanan);
    } catch (error) {
        res.json({ message: error.message });
    } 
}

export const getPelayananById = async (req, res) => {
    try {
        const pelayanan = await Pelayanan.findAll({
            where: {
                id: req.params.id
            }, include: [Opd]
        });
        res.json(pelayanan[0]);
    } catch (error) {
        res.json({ message: error.message });
    } 
}


export const createPelayanan = async (req, res) => {
    try {
        await Pelayanan.create(req.body);
        res.json({
            "message": "Pelayanan berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
 
}

export const updatePelayanan = async (req, res) => {
    try {
        await Pelayanan.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pelayanan Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
 
}

export const deletePelayanan = async (req, res) => {
    try {
        await Pelayanan.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pelayanan dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
 
}
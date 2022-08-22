import Opd from "../models/opdModel.js"; // import the opd model

export const getAllOpd = async (req, res) => {
    try {
        const opds = await Opd.findAll();
        res.json(opds);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getOpdById = async (req, res) => {
    try {
        const opd = await Opd.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(opd[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
    
 
}

export const createOpd = async (req, res) => {
    try {
        await Opd.create(req.body);
        res.json({
            "message": "OPD berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
 
}

export const updateOpd = async (req, res) => {
    try {
        await Opd.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "OPD Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
 
}

export const deleteOpd = async (req, res) => {
    try {
        await Opd.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "OPD dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
 
}
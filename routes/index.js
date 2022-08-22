import express from 'express';
import { 
    getAllOpd,
    createOpd,
    getOpdById,
    updateOpd,
    deleteOpd
 } from '../controller/Opds.js';

 

const router = express.Router();

// Router OPD
router.get('/', getAllOpd);
router.get('/:id', getOpdById);
router.post('/', createOpd);
router.patch('/:id', updateOpd);
router.delete('/:id', deleteOpd);


export default router;
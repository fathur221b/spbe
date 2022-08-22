import express from 'express';
import { 
    getAllPelayanan,
    createPelayanan,
    getPelayananById,
    getPelayananByOpdId,
    updatePelayanan,
    deletePelayanan
 } from '../controller/Pelayanans.js';

 const router = express.Router();

// Router Pelayanan
router.get('/', getAllPelayanan);
router.get('/:id', getPelayananById);
router.get('/opd/:id', getPelayananByOpdId);
router.post('/', createPelayanan);
router.patch('/:id', updatePelayanan);
router.delete('/:id', deletePelayanan);

export default router;
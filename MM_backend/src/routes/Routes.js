const { Router } = require('express');
const { getAllMotos, createMoto, updateMoto, geMotosbyMark, geMotosbyType } = require('../controllers/Controllers')

const router = Router();

router.get('/get-motos', getAllMotos);

router.get('/get-motos/mark/:mark', geMotosbyMark);

router.get('/get-motos/type/:type', geMotosbyType);

router.post('/new-moto', createMoto);

router.put('/update-moto/:id', updateMoto);

module.exports = router;
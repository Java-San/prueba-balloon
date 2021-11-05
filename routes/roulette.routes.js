const { Router } = require('express');
const { check } = require('express-validator');
const { getHistory, betRoulette } = require('../controllers/roulette.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post( '/',[
    check( 'resultado', 'El resultado de la apuesta es requerido' ).not().isEmpty(),
    check( 'fecha', 'La fecha es requerida' ).not().isEmpty(),
    check( 'apostadores', 'Los apostadores son requeridos' ).not().isEmpty(),
    validarCampos
], betRoulette )

router.get('/', getHistory);

module.exports = router;
const { Router } = require('express');
const { getUsers, createUser, editUser, deleteUser } = require('../controllers/user.controller');
const { check } = require('express-validator');
const { emailValid, validId } = require('../utils/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.get( '/', getUsers );

router.post( '/', [
    check( 'nombre', 'El nombre es requerido' ).not().isEmpty(),
    check( 'correo', 'El correo ingresado no es valido' ).isEmail(),
    check( 'correo' ).custom( emailValid ),
    validarCampos
], createUser );

router.put( '/:id', [
    check( 'id', 'No es un ID válido' ).isMongoId(),
    check( 'id' ).custom( validId ),
    validarCampos
], editUser );

router.delete( '/:id', [
    check( 'id', 'No es un ID válido' ).isMongoId(),
    check( 'id' ).custom( validId ),
    validarCampos
], deleteUser );

module.exports = router;
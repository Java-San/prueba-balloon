const { Router } = require('express');
const { getUsers, createUser, editUser, deleteUser } = require('../controllers/user.controller');
const { check } = require('express-validator');

const router = Router();

router.get( '/', getUsers );

router.post( '/', [
    check( 'nombre', 'El nombre es requerido' ).not().isEmpty(),
    check( 'correo', 'El correo ingresado no es valido' ).isEmail(),
    
], createUser );

router.put( '/:id', editUser );

router.delete( '/:id', deleteUser );

module.exports = router;
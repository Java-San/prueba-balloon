const { Router } = require('express');
const { getUsers, createUser, editUser, deleteUser } = require('../controllers/user.controller');

const router = Router();

router.get( '/', getUsers );

router.post( '/', createUser );

router.put( '/:id', editUser );

router.delete( '/:id', deleteUser );

module.exports = router;
const { response, request } = require('express');
const Usuario = require('../models/user');

// obtener todos los usuarios
const getUsers = async ( req, res ) => {
    console.log( 'get users' );

    const usuarios = await Usuario.find();

    res.json({
        status: 200,
        message: 'Usuarios registrados',
        data: usuarios
    })
};

// crear un usuario
const createUser = async ( req = request, res = response ) => {
    const { nombre, correo } = req.body;

    const usuario = new Usuario( { nombre, correo } );

    // guardamos el usuario creado
    await usuario.save();

    res.json({
        status: 200,
        message: 'Usuario creado correctamente',
        data: []
    });
};

// editar datos del usuario
const editUser = async ( req, res ) => {
    console.log( 'edit user' );

    const { id } = req.params;
    const { _id, saldo, ...resto } = req.body;

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json( {
        status: 200,
        message: 'Usuario editado correctamente',
        data: []
    } );
};

// eliminar un usuario
const deleteUser = async ( req, res ) => {
    console.log( 'delete user' );
    const { id } = req.params;

    const usuario = await Usuario.findByIdAndDelete( id );

    res.json({
        status: 200,
        message: 'Usuario eliminado',
        data: []
    })
};

module.exports = {
    getUsers,
    createUser,
    editUser,
    deleteUser
}
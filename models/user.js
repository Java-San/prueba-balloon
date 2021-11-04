const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [ true, 'El nombre es requerido' ]
    },
    correo: {
        type: String,
        required: [ true, 'El correo es requerido' ],
        unique: true
    },
    saldo: {
        type: Number,
        default: 10000
    }
});

module.exports = model( 'Usuario', UsuarioSchema );
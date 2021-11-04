const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [ true, 'El nombre es requerido' ]
    },
    inicial: {
        type: Number,
        default: 10000
    },
    saldo: {
        type: Number,
        default: 0
    }
});

module.exports = model( 'Usuario', UsuarioSchema );
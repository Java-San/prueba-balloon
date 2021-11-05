const { Schema, model } = require('mongoose');

const RoundShema = Schema({
    apostadores: [{
        id: { type: String },
        nombre: { type: String },
        apuesta: { type: String }
    }],
    resultado: {
        type: String,
        required: [true, 'El color de la ronda es requerido']
    },
    fecha: { type: String }
});

module.exports = model( 'Round', RoundShema );
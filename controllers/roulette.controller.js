const { response, request } = require('express');
const Usuario = require('../models/user');
const Round = require( '../models/round' );

const betRoulette = async ( req, res ) => {
  const data = req.body;

  // creamos la instancia de la apuesta
  const round = new Round( data );
  // guardamos la apuesta
  await round.save();

  // recorremos los apostadores
  data.apostadores.forEach( async dt => {
    await Usuario.findByIdAndUpdate( dt.id, { saldo: dt.saldo } );  
  });
  
  res.json({
    status: 200,
    message: 'Apuesta finalizada',
    data: []
  });
};

const getHistory = async ( req, res ) => { 
  const rounds = await Round.find();
  
  res.json({
    status: 200,
    message: 'Historial de rondas',
    data: rounds
  });
};

module.exports = {
  getHistory,
  betRoulette
}
const getHistory = ( req, res ) => {
    
  console.log( 'desde get history' )
  res.json( { history: 'histori' } );
};

const betRoulette = ( req, res ) => {
  console.log( 'desde bet roulette' );

  res.json( { bet: 'bet' } )
}

module.exports = {
  getHistory,
  betRoulette
}
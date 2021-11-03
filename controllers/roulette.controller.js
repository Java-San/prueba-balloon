const getHistory = ( req, res ) => {
    
    console.log( 'desde get history' )
    res.json( {nombre: 'javiera'} );
};

module.exports = {
    getHistory
}
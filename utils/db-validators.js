const Usuario = require( '../models/user' );

const emailValid = async( correo = '' ) => {
    // verificar correo
    const existEmail = await Usuario.findOne( {correo} ); // buscamos dentro de nuestro modelo un correo que se igual al correo que le estoy enviando
    if( existEmail ) throw new Error( 'El correo ya se encuentra registrado.' )

};

const validId = async( id ) => {
    const existId = await Usuario.findById( id );
    console.log('jash', existId );

    if( !existId ) throw new Error( 'El id ingresado no existe en la base de datos' );
};

module.exports = {
    emailValid,
    validId
}
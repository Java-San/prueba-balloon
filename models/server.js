const express = require('express');
const hbs = require('hbs');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.roulettePath = '/roulette';
        this.usersPath = '/users';

        
        // middleware
        this.middleware();

        // rutas del juego
        this.routes();
    }

    middleware(){
        //  parseamos
        this.app.use( express.json() );
        
        // handlebars
        //this.app.set( 'view engine', 'hbs' );

        // servimos la carpeta publica
        this.app.use( express.static('public') )
    };

    routes(){
        this.app.use( this.roulettePath, require('../routes/roulette.routes.js') );
        //this.app.use( this.usersPath, require('../routes/users.routes.js') );
    };

    listen(){
        this.app.listen( this.port, () => console.log( `Escuchando en el puerto ${this.port}` ) )
    };
}

module.exports = Server;
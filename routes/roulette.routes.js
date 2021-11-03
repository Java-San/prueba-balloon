const { Router } = require('express');
const { getHistory } = require('../controllers/roulette.controller');
const router = Router();

router.get('/history', getHistory);


// router.get('/users', ( req, res ) => {
//     console.log( 'users' )
//     res.render( 'users' );
// });

// router.get( '/table', (req, res) => {
//     console.log( 'table' )
//     res.render( 'table' );
// });

module.exports = router;
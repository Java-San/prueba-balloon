const { Router } = require('express');
const { getHistory, betRoulette } = require('../controllers/roulette.controller');

const router = Router();

router.get('/history', getHistory);

router.post( '/bet', betRoulette )

module.exports = router;
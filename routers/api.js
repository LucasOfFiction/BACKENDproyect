const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const externalApiController = require('../controllers/externalApiController');
const {validarID} = require("../middlewares/validarID")
const checks = require('../middlewares/checks')
const {validarChecks} = require('../middlewares/validarChecks')

router.get('/generateUser', externalApiController.externalApi);                
router.get('/info', apiController.info);                                       
router.get('/search/id/:id', validarID, apiController.searchForId);            
router.post('/create', checks,validarChecks, apiController.create);            
router.put('/edit/:id', validarID, checks, validarChecks, apiController.edit); 
router.delete('/delete/:id', validarID, apiController.delete);                 

module.exports = router;
var express = require('express');
var router = express.Router();
var models = require('../mysql');

/* GET users listing. */
router.get('/', function(req, res, next){

  models.extremidad.findAll().then(result => {
    res.status(200).jsonp(result);

  })
 
  console.log('llego')
});

module.exports = router;
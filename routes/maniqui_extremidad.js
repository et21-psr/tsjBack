var express = require('express');
var router = express.Router();
var models = require('../mysql');

/* GET users listing. */
router.get('/', function(req, res, next){



  models.maniqui_extremidad.findAll().then(result => {
    res.status(200).jsonp(result);

  })
 
  console.log('llego')
});

router.delete('/:id', function(req, res, next){

  let id = req.params.id;
  models.maniqui_extremidad.destroy({ 
      where: { 
        id_maniqui_extremidad: id
      
    }
    
  }).then(result => {
    res.status(200).jsonp({status:true,response:""});

  })

  router.post('/', function(req, res, next){

    res.status(200).jsonp({respuesta: "No existe"});
  
    console.log('llego')
  });

})
module.exports = router;

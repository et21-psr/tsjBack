var express = require('express');
var router = express.Router();
var models = require('../mysql');

/* GET users listing. */
router.get('/', function(req, res, next){



  models.comentario.findAll().then(result => {
    res.status(200).jsonp(result);

  })
 
  console.log('llego')
});

router.delete('/:id', function(req, res, next){

  let id = req.params.id;
  models.comentario.destroy({ 
      where: { 
        id_comentario: id
      
    }
    
  }).then(result => {
    res.status(200).jsonp({status:true,response:""});

  })

  router.post('/', function(req, res, next){

    res.status(200).jsonp({respuesta: "No existe"});
  
    console.log('llego')
  });
  
router.get('/:id', function(req, res, next){

  let id = req.params.id;
  models.comentario.findOne({ 
      where: { 
        id_comentario: id
      } 
  }).then(result => {
    if(result == null){
      res.status(200).jsonp({respuesta: "No existe"});
    }
    
      
    
    res.status(200).jsonp(result);

  })
})
})

module.exports = router; 

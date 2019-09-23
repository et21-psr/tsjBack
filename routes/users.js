var express = require('express');
var router = express.Router();
var models = require('./../mysql');

/* GET users listing. */
router.get('/', function(req, res, next){



  models.usuario.findAll().then(result => {
    res.status(200).jsonp(result);

  })
 
  console.log('llego')
});

router.delete('/:id', function(req, res, next){

  let id = req.params.id;
  models.usuario.destroy({ 
      where: { 
        id_usuario: id
      
    }
    
  }).then(result => {
    res.status(200).jsonp({status:true,response:""});

  })

  

});

router.post('/', function(req, res, next){

usuario=req.body

  models.usuario.create(usuario).then(result => {
    console.log(result)
    res.status(200).jsonp({status:true,response:""});

  })

 
});


router.get('/:id', function(req, res, next){

    let id = req.params.id;
    models.usuario.findOne({ 
        where: { 
          id_usuario:  id
        } 
    }).then(result => {
      if(result == null){
        res.status(200).jsonp({respuesta: "No existe"});
      }
      res.status(200).jsonp(result);
    })
  });


module.exports = router;

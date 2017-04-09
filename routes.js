const router = require('express').Router();
const models = require('./db').models;

router.get('/people',(req,res,next)=>{

  models.People.findAll()
  .then( people => { res.send(people) })
})


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const value=["Nidhin","Sai","Ashwin"]

  const obj={admin:true,name:"Nihdin",comments:{comment:"this is me Admin",date:"07-02-2022"}}

  res.render('index', {value,obj});
});

module.exports = router;

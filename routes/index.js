var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/Players", function(req,res){
  res.render("players.hbs", {title: 'Players'})
});

router.get("/Stats", function(req,res){
  res.render("stats", {title: ''})
});

router.get("/Games", function(req,res){
  res.render("games", {})
});

router.get("/Halloffame", function(req,res){
  res.render("halloffame", {})
});

router.get("/Jersey", function(req,res){
  res.render("jersey", {})
});
router.get("/miamiTextIcon", function(req,res){
  res.render("../public/images/miamilogo_name.jpeg", {})
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.get('/', (req, res) => {
  res.render('index');
});
app.use(express.static('public'));

module.exports = router;

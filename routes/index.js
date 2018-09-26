var express = require('express');
var router = express.Router();
// import matrix util from utils
var { matrix } = require('../utils')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Express'});
});
/* GET Calc page. */
router.get('/calc', function(req, res) {
  res.render('calc');
});
/* POST Calc page. */
router.post('/calc', function(req, res) {
  res.render('calc', {value: eval(req.body.forCalc)});
});
/* GET Calc page. */
router.get('/matrix', function(req, res) {
  res.render('matrix');
});
/* POST Calc page. */
router.post('/matrix', function(req, res) {
  // calc matrix with the help of  matrix util
  let value = matrix(Number(req.body.number1), Number(req.body.number2));
  // send it to client
  res.render('matrixResult', {value});
});
module.exports = router;

const path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET apple-app-site-association file */
router.get('/apple-app-site-association', function (req, res, next) {
  const filePath = path.normalize(__dirname + "/../apple-app-site-association");
  res.sendFile(filePath, { headers: { 'Content-Type': 'application/json' } });
});


module.exports = router;

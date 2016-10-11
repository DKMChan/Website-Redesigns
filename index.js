var express = require('express');
//var nodemailer = require('nodemailer');
//var bodyParser = require('body-parser');
//var favicon = require('serve-favicon');
var htmlController = require('./controllers/htmlController');
var app = express();



app.use('/assets',express.static(__dirname + '/public'));
//app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.set('view engine', 'ejs');

htmlController(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Express server listening on port ' + app.get('port'));
});
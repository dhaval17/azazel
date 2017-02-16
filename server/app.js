var express = require('express');

var app = express();
var cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/logger/', function(req, res) {
	res.send('hello');
});

app.post('/logger', cors(corsOptions), function (req, res) {
  res.send('Hello World');
  console.log(req.body.source + " " + req.body.headers);
  //console.log(req);
})
 
app.listen(31337);

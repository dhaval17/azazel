var express = require('express');

var app = express();
var cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/logger/', function(req, res) {
	res.send('hello');
});

app.post('/logger', cors(corsOptions), function (req, res) {
  res.send('Hello World');
  console.log(req.body.source);
})
 
app.listen(31337);

// npm imports
var express   = require('express');
var bodyParser = require('body-parser');
var http      = require('http');
var socketio  = require('socket.io');

//web server app
var app       = express();
var server    = http.createServer(app);
var io        = socketio(server);

// web server meta
var webroot   = __dirname + '/../client/';
var port      = 3000;

var yPos;
var dy = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// static hosting
app.use('/', express.static(webroot));

// run the server
server.listen(port, function() {
    console.log('hosting from ' + webroot);
    console.log('ready to serve http://10.10.90.110:' + port + '/');
});
 

// for each connected web socket
io.sockets.on('connection', function(socket) {
    
    socket.on('update', function() {
//        dy += 0.02;
//        // value from sensor
//        yPos = 400 + (Math.sin(dy) * 300);
        socket.emit('update', yPos);
    });
    
});

app.post('/', function(req, res) {
   console.log('post / = ' + JSON.stringify(req.body));
    res.status(200).send('got it');
    yPos = req.body.range;
});
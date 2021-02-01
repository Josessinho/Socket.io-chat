var express = require('express');
var app = express();
var server = app.listen(3000);

console.log("server is running");
app.use(express.static('shared'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);


function newConnection(socket){
  console.log('new connection detected: ' + socket.id);
  socket.on('message', serverReceivedMsg);

  function serverReceivedMsg(data){
    console.log(socket.id +": "+ data.text);
    io.sockets.emit('message',data);
  }
}

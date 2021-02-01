
var socket = io.connect('http://localhost:3000');

socket.on('message', clientReceivedMsg);

function clientReceivedMsg(data){
  var msgDisplay = data.id +": " + data.text;
  console.log(msgDisplay);
  var msgElement = document.createElement('P');
  msgElement.innerText = msgDisplay;
  var msgDiv = document.getElementById("messagesBox")
  msgDiv.appendChild(msgElement);
  msgDiv.scrollTop = msgDiv.scrollHeight;
}

function sendMessage(){
  var inputBox = document.getElementById('inputBox')
  var data = {
    text: inputBox.value,
    id: socket.id
  }
  socket.emit('message', data);
  inputBox.value = "";
  console.log("message sent");

}

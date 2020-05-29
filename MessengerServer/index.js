var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var allMessages = ""
var arrMessages = []

app.get('/',function(req, res){
  res.send("<html><body>" + allMessages + "</body></html>")
})

app.get('/msgs',function(req, res){
  res.send(concatArray(arrMessages))
})

app.get('/favicon.ico',function(req, res){
  res.end()
})

function getTime(){//Little trick to get the actual time, must be adjusted to get from server
  let preDate = new Date()
  preDate.setUTCHours(20)
  let nowDate = preDate.toUTCString()
  return nowDate[17] + nowDate[18] + ':' + nowDate[20] + nowDate[21]
}

function concatArray(arr){
	let returnStr = ''
	arr.forEach(obj => {
		returnStr = returnStr.concat("<p>" + obj.id + "</br>" + obj.text + "</br>" + obj.sentBy + "</br>" + obj.time + "</p>")
	})
	
	return returnStr
}

io.on("connection", socket => {
	socket.emit('chat messages', arrMessages)
	
    socket.on("chat message", msg => {
	  allMessages = allMessages.concat('<p>' + msg.text + '</p>')//Concat to the string
	  arrMessages.push({id: arrMessages.length, text: msg.text,sentBy: msg.ip, time: getTime()})//Pushing to the array
	  
	  io.sockets.emit('chat messages', arrMessages)
	  
    })
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});



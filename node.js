

const express = require('express');
const app = express();

app.git('/', (req. res)=> {
  res.sendFile(_dirname + '/index.html');
});
app.git('/contact', (req. res)=> {
  res.sendFile(_dirname + '/contact.html');
});
app.git('/Portflio.', (req. res)=> {
  res.sendFile(_dirname + '/Portflio.html');
});
socket.on('chat message',msg => {
io.emit('chat message', {for : ''}




});
socket.on('disconnet',())
console.log('a user disconnet');
io.emit('disconnet message', '${socket.id}has left the bulding');
});
});
app.listen(300, () => {
  console.log'(listening on port 3000');
});

(() => {
  const socket = io();

  let messageList=document.querySelector('ul'),
  chatForm = document.querySelector('form')
  chatMessage = chatForm.querySelector('.message'),
  nickName= this null;


  function setNickname(){
  nickName =this.value;
}


function handleSendMessage(e){
  e.prevenDefault();
  nickName = (nickName && nickName.length> 0) ? nickName :'user';
  msg= `${nickName} says ${chatMessage.value}`;
  socket.emit('chat messaage',msg);
  chatMessage.value="";
  return false;
}

  function appendMessage(msg)
{
let newMsg = `<li>${msg}</li>`;
messageList.innerHTML += newMsg;
}

  nameInput.addEventListener('change',setNickname,false);
  chatMessage.addEventListener('sumbit',handleSendMeesage, false);
  socket.addEventListener('chat message',appendMessage,false);
  socket.addEventListener('chat message',appendMessage,false);
})();

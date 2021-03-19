var socket = io("http://localhost:3000");
    
var form = document.getElementById('form');
var input = document.getElementById('input');
const $events = document.getElementById('messages');

const newItem = (content) => {
  const item = document.createElement('li');
  item.innerText = content;
  return item;
};

socket.on('hello',(message)=>{
  console.log(message);
  $events.appendChild(newItem('connect'));
})

socket.on('message', (data) => {
  $events.appendChild(newItem(data));
});


form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('message', input.value);
    input.value = '';
  }
});
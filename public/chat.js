const socket = io();

//DOM Elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', () => {
  console.log({
    username: username.value,
    message: message.value
  });
});


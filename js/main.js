import createDesktopTwo from "./createDesktopTwo.js";

const userName = document.getElementById('inputName');

export const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log(`Connected to Socket.IO server with id: ${socket.id}`);
});

socket.emit('userEnter', 1, "hej");


export const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", (e)  => {
    e.preventDefault();

    socket.emit('getUser', userName.value);
    createDesktopTwo();
  
});



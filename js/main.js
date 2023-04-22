import createDesktop3 from "./createDesktopThree.js";
import { renderGameBoard } from "./grid.js";
import regPlayer from "./color.js";
import createDesktopTwo from "./createDesktopTwo.js";
// import test from "./js/setUser.js";

//import io from '../node_modules/socket.io-client/dist/socket.io.esm.min.js';

export const socket = io('http://localhost:3000');


socket.on('connect', () => {
    console.log(`Connected to Socket.IO server with id: ${socket.id}`);
});

socket.on('getUser', (data) => {
    console.log(data);
});


export const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", (e)  => {
    e.preventDefault();

    const userName = document.getElementById('inputName');
    const user = { userName: userName.value, color: "red" };
    console.log(user);
    socket.emit('getUser', user);
    createDesktopTwo();
});




// export function login() {
//     console.log("Hej hej!");
//     let nameInLS = inputName.value;

//     localStorage.setItem("userName", nameInLS);

//     createDesktop2();
// }

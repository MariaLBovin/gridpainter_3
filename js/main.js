import createDesktop3 from "./createDesktopThree.js";
import { renderGameBoard } from "./grid.js";
import regPlayer from "./color.js";
import createDesktopTwo from "./createDesktopTwo.js";
// import test from "./js/setUser.js";

//import io from '../node_modules/socket.io-client/dist/socket.io.esm.min.js';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connected to Socket.IO server');
});
  


export const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", createDesktopTwo);




// export function login() {
//     console.log("Hej hej!");
//     let nameInLS = inputName.value;

//     localStorage.setItem("userName", nameInLS);

//     createDesktop2();
// }

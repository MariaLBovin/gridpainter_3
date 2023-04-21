// import createDesktop3 from "./createDesktopThree.js";
// import { renderGameBoard } from "./grid.js";
// import regPlayer from "./color.js";
//import createDesktopTwo from "./createDesktopTwo.js";
import setUser from "./setUser.js";
// import test from "./js/setUser.js";


// test socket io
import io from '../node_modules/socket.io-client/dist/socket.io.esm.min.js';
const socket = io('http://localhost:3000');

const loginBtn = document.getElementById("loginBtn");
const inputField = document.getElementById('inputName');

socket.on('connect', () => {
    console.log('Connected to Socket.IO server');
});
  






loginBtn.addEventListener("click", setUser);




// export function login() {
//     console.log("Hej hej!");
//     let nameInLS = inputName.value;

//     localStorage.setItem("userName", nameInLS);

//     createDesktop2();
// }

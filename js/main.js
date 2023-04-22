import createDesktopTwo from "./createDesktopTwo.js";
//import updateUsers from "./getPlayer.js";


const userName = document.getElementById('inputName');

export const socket = io('http://localhost:3000');


socket.on('connect', () => {
    console.log(`Connected to Socket.IO server with id: ${socket.id}`);
});

socket.emit('userEnter', 1, "hej");

// socket.on('getUser', (data) => {
//     console.log(data);
// });


  



export const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", ()  => {
    socket.emit('getUser', userName.value);
        //updateUsers ();
    createDesktopTwo();
  
});




// export function login() {
//     console.log("Hej hej!");
//     let nameInLS = inputName.value;

//     localStorage.setItem("userName", nameInLS);

//     createDesktop2();
// }

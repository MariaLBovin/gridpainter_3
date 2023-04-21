import createDesktopTwo from "./createDesktopTwo.js";
// const users = [];

// export default function setUser (id, username, color) {
//     const user ={id, username, color};

//     users.push(user);

//     createDesktopTwo();
    
//     return user;

    
// }

import io from '../node_modules/socket.io-client/dist/socket.io.esm.min.js';
const socket = io('http://localhost:3000');

export default function setUser () {
    const inputField = document.getElementById('inputName');
    
    const playerName = inputField.value;
    console.log(playerName);
    socket.emit('login', playerName);

    createDesktopTwo();

}

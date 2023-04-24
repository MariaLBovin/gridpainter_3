import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';
const socket = io('localhost:3000');

let nameInLS = [];

function randomizeColor(){
    const i = Math.floor(Math.random() * colors.length);
    return {color:colors[i]};
}


//registrera användaren och färg
export default function regPlayer(userName, color) {
    nameInLS.push({
      playerName: userName,
      color: color,
    });
    console.log(color);
  }


  





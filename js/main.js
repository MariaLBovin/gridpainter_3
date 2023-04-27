import createDesktopTwo from "./createDesktopTwo.js";
//import updateUsers from "./getPlayer.js";

export const socket = io('https://gridpainter-app-d34xq.ondigitalocean.app');
const loginBtn = document.getElementById("loginBtn");
const userName = document.getElementById('inputName');
const alertMsg = document.getElementById('alert-msg');

export default function init  () {
    
    socket.on('connect', () => {
        console.log(`Connected to Socket.IO server with id: ${socket.id}`);
    });
    
    socket.emit('userEnter', 1, "hej");

}

loginBtn.addEventListener("click", (e)  => {
    e.preventDefault();
    if (userName.value === '' || userName.value.length < 4) {
        alertMsg.innerHTML = 'Ogiltigt spelnamn';
        return; 
    } else {
        socket.emit('getUser', userName.value);
        //updateUsers ();
        createDesktopTwo(); 
    }
});

init ();



import createDesktopTwo from "./createDesktopTwo.js";
//import updateUsers from "./getPlayer.js";

export const socket = io('http://localhost:3000');


export default function init  () {
    const loginBtn = document.getElementById("loginBtn");
    const userName = document.getElementById('inputName');      
    socket.on('connect', () => {
        console.log(`Connected to Socket.IO server with id: ${socket.id}`);
    });
    
    loginBtn.addEventListener("click", ()  => {
        socket.emit('getUser', userName.value,(success) => {
            if(success){
                console.log(userName + 'är inloggad');
            }else {
                alert('Spelet är fullt');
        
            }
        })  ;
            //updateUsers ();
        createDesktopTwo();  
    });
}



init ();



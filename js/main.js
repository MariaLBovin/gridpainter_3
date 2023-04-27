import createDesktopTwo from "./createDesktopTwo.js";
//import updateUsers from "./getPlayer.js";


export const socket = io('https://gridpainter-app-d34xq.ondigitalocean.app');



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



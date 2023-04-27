import createDesktopTwo from "./createDesktopTwo.js";
//import updateUsers from "./getPlayer.js";


export const socket = io('https://gridpainter-app-d34xq.ondigitalocean.app');
const alertMsg = document.getElementById('alert-msg');

export default function init  () {
    const loginBtn = document.getElementById("loginBtn");
    const userName = document.getElementById('inputName');      
    socket.on('connect', () => {
        console.log(`Connected to Socket.IO server with id: ${socket.id}`);
    });
    
    loginBtn.addEventListener("click", (e)  => {
        e.preventDefault();
        if (userName.value === '' || userName.value.length < 4) {
            alertMsg.innerHTML = 'Ogiltigt spelnamn';
            return; 
        } else {
            socket.emit('getUser', userName.value);
                // if(success){
                //     console.log(userName + 'är inloggad');
                // }else {
                //     alert('Spelet är fullt');
            
                // }    
            //     console.log('funkar'); 
            // })  ;
                  //updateUsers ();
            createDesktopTwo();  
        }
    });
}



init ();



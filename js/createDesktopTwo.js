import createDesktopThree from "./createDesktopThree.js";

import { chatMsg, printChatMessage } from "./chat.js";

export const socket = io('http://localhost:3000');

const users = [];

export default function createDesktopTwo(){
    const contentContainer = document.querySelector(".contentContainer");

    startGameBtn.addEventListener('click', (e) => {
        e.preventDefault();

        createDesktopThree(); 
        chatMsg();

        const chatMessages = document.querySelector('.chat-messages');

        socket.on('message', message => {
            printChatMessage(message);

            // scroll down
            chatMessages.scrollTop = chatMessages.scrollHeight;
          });

    });

}

    contentContainer.innerHTML = '';

    function updateContent(data) {
        const containerDiv = document.createElement('div');
        
        const playerHeader = document.createElement('h2');
        playerHeader.innerHTML = 'Antal spelare ' + data.length;

        const h3 = document.createElement('h3');
        h3.innerText = 'Spelets regler:';

        const textArticle = document.createElement('article');
        textArticle.innerText = `När spelet börjar blir du tilldelad en färg (grön, gul, blå eller grön). Färgen kommer visas på nästa sida. 
                    I början på spelet kommer en bild att visas i 10 sekunder och sedan försvinner bilden. Du och tillsammans med 3 andra spelar har i uppgift att rita av den tidigare visade bilden.
                    Tänk även på att rätt färg ska vara i rätt ruta.`;
        const p = document.createElement('p');
        p.innerHTML = 'Lycka till!';
        
        const startGameBtn = document.createElement('button');
        startGameBtn.innerText = 'Starta spelet';
        
        contentContainer.appendChild(containerDiv);
        containerDiv.append(playerHeader, h3, textArticle, p, startGameBtn);

        console.log(data);

        startGameBtn.addEventListener('click', createDesktopThree);
    }

    function handleUpdateUsers(data) {
        contentContainer.innerHTML = '';

        socket.on('updateUsers', handleUpdateUsers);
        updateContent(data);
    }

    socket.on('updateUsers', handleUpdateUsers);
}


// import createDesktopThree from "./createDesktopThree.js";
// import { socket } from "./main.js";
// //export const users = [];

// export default function createDesktopTwo(){
//     const contentContainer = document.querySelector(".contentContainer");
//     contentContainer.innerHTML = '';

//     socket.on('updateUsers', (data) => {
        
//         const containerDiv = document.createElement('div');
        
//         const playerHeader = document.createElement('h2');
//         playerHeader.innerHTML = 'Antal spelare ' + data.length;

//         const h3 = document.createElement('h3');
//         h3.innerText = 'Spelets regler:';

//         const textArticle = document.createElement('article');
//         textArticle.innerText = `När spelet börjar blir du tilldelad en färg (grön, gul, blå eller grön). Färgen kommer visas på nästa sida. 
//                     I början på spelet kommer en bild att visas i 10 sekunder och sedan försvinner bilden. Du och tillsammans med 3 andra spelar har i uppgift att rita av den tidigare visade bilden.
//                     Tänk även på att rätt färg ska vara i rätt ruta.`;
//         const p = document.createElement('p');
//         p.innerHTML = 'Lycka till!';
        
//         const startGameBtn = document.createElement('button');
//         startGameBtn.innerText = 'Starta spelet';
        
//         contentContainer.appendChild(containerDiv);
//         containerDiv.append(playerHeader, h3, textArticle, p, startGameBtn);


//         console.log(data);
//         //alert(data.length);

//         startGameBtn.addEventListener('click', createDesktopThree);


//       });
    
// //       const contentContainer = document.querySelector(".contentContainer");
// //       contentContainer.innerHTML=`
// //       <div class="desktop2">
// //       <h2 class="countPlayersTitle">Antal spelare: <span id="countPlayers">x</span></h2>
// //       <div>
// //           <h3 class="gameRulesTitle">Spelets regler:</h3>
// //           <p class="gameRulesText">
// //               När spelet börjar blir du tilldelad en färg (grön, gul, blå eller grön). Färgen kommer visas på nästa sida. 
// //               I början på spelet kommer en bild att visas i 10 sekunder och sedan försvinner bilden. Du och tillsammans med 3 andra spelar har i uppgift att rita av den tidigare visade bilden.
// //               Tänk även på att rätt färg ska vara i rätt ruta.
// //               <br>Lycka till!                 
// //           </p>
// //       </div>
// //       <button id="startGameBtn">STARTA SPELET</button>
// //   </div>
// //   `;
    
    

    
//     //test ();

//     // const displayNumberOfUsers = document.querySelector('#countPlayers');
//     // console.log(displayNumberOfUsers);
//     // displayNumberOfUsers.innerHTML = users;
//     // const startGameBtn = document.querySelector('#startGameBtn');
//     // startGameBtn.addEventListener('click', createDesktopThree);

//     // getPlayers();
// }


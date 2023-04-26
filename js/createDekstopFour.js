import checkPercentage from "./checkPercentage.js";



export default function createDesktopFour(){
            const playDiv = document.createElement('div');
            playDiv.classList.add('play-div');
        
            const headerDiv = document.createElement('div');
            headerDiv.classList.add('header-div');
        
            const colourAttached = document.createElement("p");
            colourAttached.classList.add('färg-p');
            colourAttached.innerText = 'Du är färgen ' + currentUser.color;
        
            const displayTime = document.createElement("span");
            displayTime.classList.add('time-finish-span');
            displayTime.innerText = "Tiden är slut!";
        
            const displayName = document.createElement("h3");
            displayName.classList.add('name-h3');
            displayName.innerText = 'Hej ' + currentUser.userName;
        
            const footerDiv = document.createElement('div');
            footerDiv.classList.add('footer-div');
        
            const cancelBtn = document.createElement("button");
            cancelBtn.innerText = "Avbryt";
        
            const resultBtn = document.createElement("button");
            resultBtn.innerText = "Se resultat";
        
            container.appendChild(mainDiv);
            mainDiv.append(playDiv, chatDiv);
            playDiv.append(headerDiv, gridDiv, footerDiv);
            headerDiv.append(displayName, colourAttached, displayTime);
            //displayTime.append(countDown);
            footerDiv.append(resultBtn, cancelBtn);
    
            // socket.on('getUser', (user) => {
            //     console.log(user);
            //   });
    
            renderGameBoard(gridDiv);
    
            const chatMessages = document.querySelector('.chat-messages');
                
          socket.on('message', message => {
              printChatMessage(message);
              console.log(message);
    
              // scroll down
              chatMessages.scrollTop = chatMessages.scrollHeight;
          });
    
          chatMsg(currentUser);
          // printUsers(data);
    
        }
      
    
    
    

    checkPercentage();
}
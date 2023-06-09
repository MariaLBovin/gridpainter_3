import createDesktopThree from "./createDesktopThree.js";
import { socket } from "./main.js";

export default function createDesktopTwo() {

  function handleUpdateUsers(data) {
    contentContainer.innerHTML = "";
    updateContent(data);
    console.log(data);
  }

  socket.on("updateUsers", handleUpdateUsers);

  const contentContainer = document.querySelector(".contentContainer");
  contentContainer.innerHTML = "";

  function updateContent(data) {
    const containerDiv = document.createElement("div");

    const playerHeader = document.createElement("h2");
    playerHeader.innerHTML = "Antal spelare " + data.length;

    const h3 = document.createElement("h3");
    h3.innerText = "Spelets regler:";

    const textArticle = document.createElement("article");
    textArticle.innerText = `När spelet börjar blir du tilldelad en färg (grön, gul, blå eller grön). Din tilldelade färg visas på nästa sida. 
                    Här får ni också en framslumpad bild som ni tillsammans med 3 andra spelar har i uppgift att rita av.
                    Tänk även på att rätt färg ska vara i rätt ruta.`;
    const p = document.createElement("p");
    p.innerHTML = "Lycka till!";

    const startGameBtn = document.createElement("button");
    startGameBtn.innerText = "Starta spelet";
    startGameBtn.disabled = true;
    contentContainer.appendChild(containerDiv);
    containerDiv.append(playerHeader, h3, textArticle, p, startGameBtn);

    startGameBtn.addEventListener("click", (e) => {
        e.preventDefault();

        socket.emit('startGame', (data));
        socket.emit("image"); 
        
        // createDesktopThree(data);

    } );
    
    console.log('inloggade i spelet' + data);

    socket.emit('startGameBtn', (data));

    socket.on('activateGameBtn', () => {
      startGameBtn.disabled = false; // Aktivera knappen 
      // createDesktopThree(data);
    });
  }

  socket.on('startGame', (data) => {
    createDesktopThree(data);
  });

  

  socket.on("fullGame", () => {
    contentContainer.innerText = "Spelet är fullt, försök igen senare";
    const backButton = document.createElement("button");
    backButton.innerText = "Tillbaka till startsidan";

    backButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "index.html";
    });

    contentContainer.appendChild(backButton);
  });
}


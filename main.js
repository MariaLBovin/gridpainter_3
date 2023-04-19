import createDesktop3 from "./js/createDesktopThree.js";

const loginBtn = document.getElementById("loginBtn");
let inputName = document.getElementById("inputName");

loginBtn.addEventListener("click", login);

// Create desktop 2 by changing innerHTML:
export function createDesktop2(){
    const contentContainer = document.querySelector(".contentContainer");
    contentContainer.innerHTML=`
    <div class="desktop2">
        <h2 class="countPlayersTitle">Antal spelare: <span id="countPlayers">x</span></h2>
        <div>
            <h3 class="gameRulesTitle">Spelets regler:</h3>
            <p class="gameRulesText">
                När spelet börjar blir du tilldelad en färg (grön, gul, blå eller grön). Färgen kommer visas på nästa sida. 
                I början på spelet kommer en bild att visas i 10 sekunder och sedan försvinner bilden. Du och tillsammans med 3 andra spelar har i uppgift att rita av den tidigare visade bilden.
                Tänk även på att rätt färg ska vara i rätt ruta.
                <br>Lycka till!                 
            </p>
        </div>
        <button id="startGameBtn">STARTA SPELET</button>
    </div>
    `;

    const startGameBtn = document.querySelector('#startGameBtn');
    startGameBtn.addEventListener('click', createDesktop3);
}

export default function login() {
    console.log("Hej hej!");
    let nameInLS = inputName.value;
    localStorage.setItem("userName", nameInLS);

    createDesktop2();
}


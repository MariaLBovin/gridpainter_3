const loginBtn = document.getElementById("loginBtn");
let inputName = document.getElementById("inputName");



loginBtn.addEventListener("click", login);

// Create desktop 2 by changing innerHTML:
function createDesktop2(){
    const contentContainer = document.querySelector(".contentContainer");
    contentContainer.innerHTML=`
    <div>
        <h2 class="countPlayersTitle">Antal spelare:<span id="countPlayers">x</span></h2>
        <div>
            <h3 class="gameRulesTitle">Spelets regler:</h3>
            <p class="gameRulesText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis alias atque necessitatibus aspernatur excepturi mollitia omnis, soluta quod nemo fugit. Adipisci mollitia a repudiandae eum optio ex, nostrum odio.</p>
        </div>
        <button id="startGameBtn">STARTA SPELET</button>
    </div>
    `;
}

function login() {
    console.log("Hej hej!");
    let nameInLS = inputName.value;
    localStorage.setItem("userName", nameInLS);

    createDesktop2();
}
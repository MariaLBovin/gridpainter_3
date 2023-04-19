
const headerDiv = document.createElement('div');
let sec= 50;


export default function createDesktop3 () {
    const container = document.querySelector('.contentContainer');
    container.innerHTML = ""
    console.log(container);

    const mainDiv = document.createElement('div');
    headerDiv.innerText = 'namn och tilldelad färg';
    const playDiv = document.createElement('div');
    playDiv.innerText = 'spel-div'
    const chatDiv = document.createElement('div');
    chatDiv.innerText = 'chat-div'
    container.appendChild(mainDiv);
    mainDiv.append(playDiv,chatDiv);
    playDiv.prepend(headerDiv);

    getPlayer();

}

export function getPlayer(){ 
    const nameInLS = localStorage.getItem("userName");
    const displayName = document.createElement("h3");
    displayName.innerHTML = nameInLS;
    const colourAttached = document.createElement("p");
    colourAttached.innerHTML="färg";

   /* fetch("")
    .then(res => res.json())
    .then(color =>{
        shuffle((color: any[])=>{
            math.random();
        })
    })*/

    let displayTime = document.createElement("div");
    displayTime.innerText="Återstående tid";
    let countDown = document.createElement("p");
    countDown=setInterval(setTimer, 1000);

    console.log(displayName, colourAttached);
    headerDiv.append(displayName,colourAttached, displayTime);
    displayTime.append(countDown)
}

function setTimer(){
    let timer=document.createElement("p");
    timer.innerHTML= sec + ' seconds';
    console.log("tid", timer);
    sec--;
    if (sec === 0) {
      clearInterval(timer);
      alert('The time is up!');
    }
    headerDiv.append(timer);
}
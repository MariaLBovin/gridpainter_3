import {footerDiv, headerDiv} from "./createDesktopThree.js";
import createDesktopTwo from "./createDesktopTwo.js";
import { renderGameBoard } from "./grid.js";

export let notisDiv = document.createElement("div");

export default function cancel(){
    let yesBtn = document.createElement("button");
    let noBtn = document.createElement("button");

    notisDiv.innerHTML="Är du säker på att du vill avsluta spelet?"
    yesBtn.innerText="Ja"
    noBtn.innerText="Nej";
    footerDiv.append(notisDiv);
    notisDiv.append(yesBtn, noBtn);

    yesBtn.addEventListener("click", ()=>{
    createDesktopTwo();
    footerDiv.innerHTML="";
    headerDiv.innerHTML="";
    })

    noBtn.addEventListener("click", ()=>{
        notisDiv.innerHTML="";
    })
}
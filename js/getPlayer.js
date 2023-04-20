import createDesktopThree from "./createDesktopThree.js";
import {displayName, colourAttached} from "./createDesktopThree.js";

export default function getPlayer(){ 
    const inputName = document.getElementById("inputName");
    displayName.innerHTML = "Välkommen " + inputName;
    console.log(displayName, colourAttached);
    //headerDiv.append(displayName,colourAttached);
    //regPlayer();
}

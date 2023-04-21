import createDesktopThree from "./createDesktopThree.js";
import {displayName, colourAttached} from "./createDesktopThree.js";
import { socket } from "./main.js";


const users = [];

export default function getPlayer(){ 
    // const inputName = document.getElementById("inputName");
    // displayName.innerHTML = "Välkommen " + inputName;
    // console.log(displayName, colourAttached);
    //headerDiv.append(displayName,colourAttached);
    //regPlayer();

    socket.on('getUser', (data) => {
        console.log(data);
    });
}

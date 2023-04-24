
//import createDesktopTwo from "./createDesktopTwo.js";
import { socket } from "./main.js";
//import { users} from './createDesktopTwo.js';
 
export default function updateUsers () {

    socket.on('updateUsers', function (data) {
        console.log(data);

        //createDesktopTwo(data);
    });
}

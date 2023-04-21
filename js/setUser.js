import createDesktopTwo from "./createDesktopTwo.js";
const users = [];

export default function setUser (id, username, color) {
    const user ={id, username, color};

    users.push(user);

    createDesktopTwo();
    
    return user;

    
}
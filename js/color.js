
let colors = ["red", "green", "blue", "yellow"];
let nameInLS = [];

function randomizeColor(){
    const i = Math.floor(Math.random() * colors.length);
    return {color:colors[i]};
}


//registrera användaren och färg
export default function regPlayer(userName, color) {
    nameInLS.push({
      playerName: userName,
      color: color,
    });
    console.log(color);
  }







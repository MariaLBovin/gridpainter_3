import { socket } from "./main.js";

export default async function fetchImage () {
    //console.log(cell);
    await fetch('http://localhost:3000/conclusions')
        .then(res => res.json())
            .then((img) => {
                // Randomly select an object from the array
                const randomIndex = Math.floor(Math.random() * img.length);
                const randomElement = img[randomIndex];
                // console.log("random element:", randomElement);
                // console.log("img:", img.length);

                //console.log("random image:", randomImage);
                const img1 = randomElement.grid;
                img1.forEach(img => {
                    //console.log("img id:", img.id);
                    // console.log("img style:", img.style);
                    const color = img.style;
                    const position = img.id;
                    
                    const cell1 = document.querySelector(`#square-${position}`);
                    //console.log("cell1:", cell1);
                    cell1.style.backgroundColor = color;
                });
                //console.log("img",img[0].grid);
                
                // console.log(img1);
                // console.log(img1[0].id);
                
                
            }
    );  
    socket.emit('image', (randomElement) => {
        console.log('det här är vårt randomElementFront', randomElement);
    });
}
//facit.forEach(item => {
                //console.log(item.color);
                //const color = item.color;
                //const position = item.position;
            //     const cell = document.querySelector(`#cell-${position}`);
            //     cell.style.backgroundColor = color;
            // });
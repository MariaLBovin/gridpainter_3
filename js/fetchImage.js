import { socket } from "./main.js";
export let img1;

export default async function fetchImage () {


    // socket.emit("image", img1); 

    
    socket.on("image", (randomConclusion) => {

        console.log(randomConclusion);

        //console.log(randomConclusion);
        //Update the grid with the new image
        const imgArray = randomConclusion.grid;
        
        imgArray.forEach((img) => {
          const color = img.style;
          const position = img.id;
          const cell1 = document.querySelector(`#square-${position}`);
          cell1.style.backgroundColor = color;
        });
        });
}


    // await fetch('http://localhost:3000/conclusions')
    //     .then(res => res.json())
    //         .then((img) => {
    //             // Randomly select an object from the array
    //             const randomIndex = Math.floor(Math.random() * img.length);
    //             const randomElement = img[randomIndex];

    //             console.log(randomElement);
    //             // console.log("random element:", randomElement);
    //             // console.log("img:", img.length);
    //             // socket.emit("image", img1);
    //             //console.log("random image:", randomImage);
    //             const img1 = randomElement.grid;
                
    //             console.log(img1);

    //             img1.forEach(img => {

    //                 const color = img.style;
    //                 const position = img.id;
    //                 const cell1 = document.querySelector(`#square-${position}`);

    //                 cell1.style.backgroundColor = color;
    //             });                          
    //         }
    // ); 

    // socket.emit('image', (randomElement) => {
    //     console.log('det här är vårt randomElementFront', randomElement);
    // });
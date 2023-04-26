import { socket } from "./main.js";
export let img1;

export default async function fetchImage () {
    await fetch('http://localhost:3000/conclusions')
        .then(res => res.json())
            .then((img) => {
                // Randomly select an object from the array
                const randomIndex = Math.floor(Math.random() * img.length);
                const randomElement = img[randomIndex];

                socket.emit("image", randomElement);

                img1 = randomElement.grid;

                img1.forEach(img => {

                    const color = img.style;
                    const position = img.id;
                    const cell1 = document.querySelector(`#square-${position}`);

                    cell1.style.backgroundColor = color;
                });                          
            }
    );  
    // Update the grid with the new image
    socket.on("image", (randomElement) => {
        const img1 = randomElement.grid;
        img1.forEach((img) => {
          const color = img.style;
          const position = img.id;
          const cell1 = document.querySelector(`#square-${position}`);
          cell1.style.backgroundColor = color;
        });
      });
}


export default async function fetchImage () {
    console.log('test fetch image');
    //console.log(cell);
    await fetch('http://localhost:3000/conclusions')
        .then(res => res.json())
            .then((img) => {
                const img1 = img[0].grid;
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
    
}
//facit.forEach(item => {
                //console.log(item.color);
                //const color = item.color;
                //const position = item.position;
            //     const cell = document.querySelector(`#cell-${position}`);
            //     cell.style.backgroundColor = color;
            // });
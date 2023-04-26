export default function checkPercentage(array1, array2) {


    // Är längden samma lika?
    if (array1.length !== array2.length) {
      return 0;
    }
  
    // Kontrollera hur många procent som är samma lika.
    let count = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        count++;
      }
    }
  
    //Räkna ut och printa hur många procent man fått.
    return (count / array1.length) * 100;
  }

    const facit = [1, 2, 3];
    const input = [1, 2, 3];

    const similarityPercentage = checkPercentage(input, facit);
console.log(`Ni hade ${similarityPercentage}% rätt`);
export default function checkPercentage(array1, array2) {


    // Är längden samma lika?
    console.log('array1:', array1);
    console.log('array2:', array2);
    
    if (array1.length === array2.length) {

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

  console.log("Olika långa");
  return 0;
}





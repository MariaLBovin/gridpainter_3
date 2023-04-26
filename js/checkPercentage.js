
export default function checkPercentage(img1, conclusionFlat) {

    // Är längden samma lika?
    if (img1.length === conclusionFlat.length) {
      // Kontrollera hur många procent som är samma lika.
      let count = 0;
      for (let i = 0; i < img1.length; i++) {
        if (img1[i].style === conclusionFlat[i].style) {
          count++;
        }
      }
    
      //Räkna ut och printa hur många procent man fått.
      return (count / img1.length) * 100;
    } 

    return 0;
}





export default function playAgain () {
    const footerDiv = document.querySelector(".footer-div");
    const playAgainBtn = document.createElement("button");
    playAgainBtn.innerHTML="Spela igen";
    footerDiv.prepend(playAgainBtn);
}

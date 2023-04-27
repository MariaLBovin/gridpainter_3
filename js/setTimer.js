export const countDown = document.createElement("span");
export const myInterval = setInterval(setTimer, 1000);

const startingMinutes = 5;
let time = startingMinutes * 60;

export default function setTimer(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10? "0" + seconds : seconds;
    countDown.innerHTML = `${minutes}:${seconds}`;
    time --;
    time = time < -1 ? -1 : time;
    
if (time === -1) {
    clearInterval(myInterval);
    countDown.innerHTML = "STOP";
} return;
}

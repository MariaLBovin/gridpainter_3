

export default function createDesktop3 () {
    const container = document.querySelector('.contentContainer');
    container.innerHTML = ""
    console.log(container);

    const mainDiv = document.createElement('div');
    const headerDiv = document.createElement('div');
    headerDiv.innerText = 'headerdiv';
    const playDiv = document.createElement('div');
    playDiv.innerText = 'spel-div'
    const chatDiv = document.createElement('div');
    chatDiv.innerText = 'chat-div'
    container.appendChild(mainDiv);
    mainDiv.append(playDiv,chatDiv);
    playDiv.prepend(headerDiv);


}
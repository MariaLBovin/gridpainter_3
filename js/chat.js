export const socket = io('http://localhost:3000');

export function chatMsg() {
    const chatForm = document.getElementById('chat-form');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const msg = e.target.elements.msg.value;

        console.log('messagevalue' + msg);

        //Emit message to server
        socket.emit('chatMessage', msg);
    });
}

export function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">Brad<span>9:12pm</span></p>
    <p class="text">${message}</p>`;
    document.querySelector('.chat-messages').append(div);
}



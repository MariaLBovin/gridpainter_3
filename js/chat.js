export const socket = io('http://localhost:3000');

export function chatMsg() {
    const chatForm = document.getElementById('chat-form');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const msg = e.target.elements.msg.value;

        //Emit message to server
        socket.emit('chatMessage', msg);

        e.target.elements.msg.value = '';
        e.target.elements.msg.focus();

    });
}

export function printChatMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
    <p class="text">${message.text}</p>`;
    document.querySelector('.chat-messages').append(div);
}



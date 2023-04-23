export const socket = io('http://localhost:3000');

export function chatMsg(data) {
    console.log(data);
    const chatForm = document.getElementById('chat-form');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const msg = e.target.elements.msg.value;
        
        socket.emit('chatMessage', msg, data);
        console.log(data);

        e.target.elements.msg.value = '';
        e.target.elements.msg.focus();

    });
}

export function printChatMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">${message.text}</p>`;
    document.querySelector('.chat-messages').append(div);
}

export function printUsers(data) {
    const userList = document.getElementById('users');
    userList.innerHTML = `
    ${data.map(user => `<li>${user.userName}</li>`).join('')}
    `;
}



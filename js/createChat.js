export const socket = io('http://localhost:3000');

export function chatMsg(currentUser) {
    console.log(currentUser);
    const chatForm = document.getElementById('chat-form');

    const username = currentUser.userName;
    //console.log(username);

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const msg = e.target.elements.msg.value;
        
        socket.emit('chatMessage', msg, username);
        console.log(msg, username);

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
    //console.log('test');
    const userList = document.getElementById('users');
    console.log(userList);
    userList.innerHTML = `
    ${data.map(user => `<li>${user.userName}</li>`).join('')}
    `;
}
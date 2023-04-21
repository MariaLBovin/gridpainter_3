export default function createChat () {
    const chatDiv = document.querySelector('.div-chat');
    chatDiv.innerHTML = `<div class="chat-container">
    <header class="chat-header">
      <h1><i class="fas fa-smile"></i> ChatCord</h1>
      <a href="index.html" class="btn">Leave Room</a>
    </header>
    <main class="chat-main">
      <div class="chat-sidebar">
        <h3><i class="fas fa-comments"></i> Room Name:</h3>
        <h2 id="room-name"></h2>
        <h3><i class="fas fa-users"></i> Users</h3>
        <ul id="users">
        </ul>
      </div>
      <div class="chat-messages"></div>
    </main>
    <div class="chat-form-container">
      <form id="chat-form">
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autocomplete="off"
        />
        <button class="btn">Skicka</button>
      </form>
    </div>
    </div>`;
    console.log(chatDiv);
}
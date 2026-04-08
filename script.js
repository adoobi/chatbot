
const chat = document.getElementById('chat');
const input = document.getElementById('input');

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  input.value = '';

  setTimeout(() => {
    let reply = getBotReply(text);
    addMessage(reply, 'bot');
  }, 500);
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes('halo')) return 'Halo juga!';
  if (message.includes('apa kabar')) return 'Aku baik, kamu gimana?';
  if (message.includes('nama')) return 'Aku chatbot sederhana 😄';

  return 'Maaf, aku belum mengerti 😅';
}

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});

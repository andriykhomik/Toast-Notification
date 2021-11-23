const toasts = document.querySelector('#toasts');
const button = document.querySelector('#button');

const messages = ['Something went wrong', 'You should fix it', 'The stuff don\'t works anymore', 'I\'m so sorry but it is impossible'];
const types = ['info', 'success', 'error'];

button.addEventListener('click', ()=> createNotification());

function createNotification(message = null, type = null){
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(type ? type : getRandomType());
    notification.innerText = message ? message : getRandomMessage();
    toasts.appendChild(notification);
    setTimeout(()=> {
        notification.remove()
    }, 3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)];
}

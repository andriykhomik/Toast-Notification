const toast = document.querySelector('#toasts');
const button = document.querySelector('#button');

const words = ['Something went wrong', 'You should fix it', 'The stuff don\'t works anymore', 'I\'m so sorry but it is impossible'];
const colors = ['red', 'green', 'blue', 'orange', 'pink', 'purple'];

button.addEventListener('click', ()=> {

    const message = Math.round(Math.random() * (words.length - 1));
    const messageEl = document.createElement('div');
    messageEl.innerText = words[message];
    messageEl.classList.add('toast');
    messageEl.style.backgroundColor = colors[Math.round(Math.random() * (colors.length - 1))];
    toast.appendChild(messageEl);
    console.log (message);
    console.log (messageEl);
    setTimeout(removeToast, 5000);

})

function removeToast(){
    const toasts = document.querySelectorAll('.toast');
    if (toasts.length > 0){
        const firstToast = toasts[0];
        toast.removeChild(firstToast);
    }
}

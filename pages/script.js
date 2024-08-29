// BURGER FUNCTIONALITY
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

burger.addEventListener("click", ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.replace('hidden','flex');
        nav.classList.add('flex-col');
        nav.classList.add('items-start');
        menu.classList.add('justify-between');
        nav.classList.remove('items-center');
    }
    else{
        menu.classList.add('hidden')
    }
})

import config from './config.js';

emailjs.init(config.USER_ID);

const contactForm = document.getElementById('form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById('submit')

    btn.textContent = 'Sending...';
    const formData = {
        name: document.getElementById('inputName').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
        message: document.getElementById('inputMessage').value,
        reply_to: "Ian"
    };

    emailjs.send(config.SERVICE_ID,config.TEMPLATE_ID, formData)
    .then(response => {
        btn.textContent = 'Submit';
        alert('Message sent successfully!');
        console.log('Success:', response);
        document.getElementById('inputName').value ="";
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputPhone').value = "";
        document.getElementById('inputMessage').value = "";
    })
    .catch(error => {
        btn.textContent = 'Try again';
        alert('Failed to send message. Please try again.');
        console.error('Error:', error);
    })
});


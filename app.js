// const input = document.querySelector('input').value;
const btn = document.querySelector('button');
const validEmail = document.querySelector('.valid');
const invalidEmail = document.querySelector('.invalid');

function validateEmail () {
    const text = document.querySelector('#text').value;

    const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(text.match(check)){
        console.log('valid');
        validEmail.classList.add('show')
        invalidEmail.classList.remove('show')
        validEmail.innerHTML = 'Succes! Thank you!'
        invalidEmail.innerHTML = ''
    } else {
        console.log('invalid')
        invalidEmail.classList.add('show')
        validEmail.classList.remove('show')
        invalidEmail.innerHTML = 'Please provide a valid email address!'
        validEmail.innerHTML = ''
    } 

    event.preventDefault()
}

btn.addEventListener('click', validateEmail)

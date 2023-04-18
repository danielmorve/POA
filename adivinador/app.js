const guessInput = document.getElementById('guess');
const button = document.getElementById('submit');
const message = document.getElementById('message');
const randomNumber = Math.floor(Math.random() * 100) + 1;

function guessNumber(){
    const guess = parseInt(guessInput.value);

    if(guess === randomNumber){
        message.innerText = '¡Felicidades!, adivinaste el número';
    }else if(guess < randomNumber){
        message.innerText = 'Intenta con un número más alto';
    }else if(guess > randomNumber){
        message.innerText = 'Intenta con un número más bajo';
    }
}

button.addEventListener('click', guessNumber);
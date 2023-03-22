const input = document.querySelector('#login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');




const validateInput = ({ target }) => {
    if (target.value.length > 1 ){
        button.removeAttribute('disabled')
        return;
        //} else {
        
    }
    button.setAttribute('disabled', '')
    //Caso não queira utilizar o else você pode utilizar o return dentro do IF
}

const handleSubmit = () =>{
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = '../Pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
let button = document.querySelector('#button');

let disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);
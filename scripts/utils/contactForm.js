const body = document.querySelector("#body");
const main = document.querySelector("#main");

const modal = document.querySelector(".modal");
const contactModal = document.querySelector('#contact_modal');
const contactBtn = document.querySelector('.contact_button');
const modalHeader = document.querySelector(".modal-header");
const closeBtn = document.querySelector('#close-modal__btn');

const form = document.querySelector('form');
const firstName = document.getElementById("prenom");
const lastName = document.querySelector("#nom");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

// Close modal when button is clickeds
closeBtn.addEventListener('click', closeModal);

// Close modal when escape key is pressed
document.addEventListener('keydown', (e) => {
    const keyCode = e.keyCode ? e.keyCode : e.which
    if (modal.getAttribute('aria-hidden') === 'false' && keyCode === 27) {
        closeModal();
    }
});

function displayModal() {
    const photographerName = sessionStorage.getItem('photographerName');
    const h2 = document.createElement('h2');
    h2.textContent = photographerName;
    modalHeader.appendChild(h2);
    main.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    // body.classList.add('no-scroll');
    contactModal.style.display = "block";
	
    closeBtn.focus();
}

function closeModal() {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    body.classList.remove('no-scroll');
    contactModal.style.display = "none";
    contactBtn.focus();
    // location.reload();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(formIsValid()){
        console.log(data);
        setTimeout(function(){
            closeModal();
        }, 950);
    }
});

function validateFirstname(firstName){
    if(firstName.value.length === 0 ){
        displayError(firstName, "Veuillez entrer votre prénom");
        return false;
    } else if(firstName.value.length < 2){
        displayError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom");
        return false;
    } else {
        displaySuccess(firstName);
        return true;
    }
}

function validateLastname(lastName){
    if(lastName.value.length === 0 ){
        displayError(lastName, "Veuillez entrer votre nom");
        return false;
    } else if(lastName.value.length < 2){
        displayError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom");
        return false;
    } else {
        displaySuccess(lastName);
        return true;
    }
}

function validateEmail(email){
    let validMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+).[a-zA-Z0-9-]*$/;

    if(validMail.test(email.value) === false){
        displayError(email, 'Vous devez enter une adresse mail valide');
        return false;
    } else {
        displaySuccess(email);
        return true;
    }
}

function validateMessage(message){
    if(lastName.value.length === 0 ){
        displayError(message, "Veuillez entrer votre message");
        return false;
    } else {
        displaySuccess(message);
        return true;
    }
}

// Display errors message
function displayError(input, msg){
    // display error border
    input.parentElement.dataset.errorVisible = "true"

    // display error msg
    input.parentElement.dataset.error = msg;
}

// Display sucess message
function displaySuccess(input){
   // display error border
    input.parentElement.dataset.errorVisible = "false";
    input.parentElement.dataset.error = "";
}


const formIsValid = () => {
    let firstnameIsVaild = validateFirstname(firstName),
    lastnameIsValid = validateLastname(lastName),
    emailIsValid = validateEmail(email);
    messageIsValid = validateMessage(message);

    let fielsIsValid = firstnameIsVaild && lastnameIsValid && emailIsValid && messageIsValid;

    if(fielsIsValid){
        this.data = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            message: message.value
        }
        return data;
    }
}

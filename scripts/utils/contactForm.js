const body = document.querySelector("#body");

const modal = document.querySelector(".modal");
const myModal = document.querySelector("#myModal");
// const modalTitle = document.querySelector("#modal-title");
const openModalBtn = document.querySelector("#open-modal__btn");
const closeModalBtn = document.querySelector(".close-modal__btn");
// const submitBtn = document.querySelector("#submit__btn");

const form = document.querySelector("form");
const firstName = document.getElementById("prenom");
const lastName = document.querySelector("#nom");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

// add all the elements inside modal which you want to make focusable
const  focusableElements = "button, input, textarea, [tabindex]:not([tabindex='-1'])";

// Get first element to be focused inside modal
const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
const focusableContent = modal.querySelectorAll(focusableElements);

// Get last element to be focused inside modal
const lastFocusableElement = focusableContent[focusableContent.length - 1];

// Open modal when button is clicked
openModalBtn.addEventListener("click", openModal);

// Close modal when button is clicked
closeModalBtn.addEventListener("click", closeModal);

// Close modal when escape key is pressed
document.addEventListener("keydown", (e) => {
    const keyCode = e.keyCode ? e.keyCode : e.which
    if (keyCode === 27) {
        closeModal();
    }
});

function openModal(){
    body.classList.add("no-scroll");
    myModal.style.display = "block";

    document.addEventListener("keydown", function(e) {
        let isTabPressed = e.key === "Tab" || e.keyCode === 9;
        if (!isTabPressed) {
            return;
        }
        // If shift key pressed for shift + tab combination
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                // Add focus for the last focusable element
                lastFocusableElement.focus();
                e.preventDefault();
            }
        // If tab key is pressed
        } else {
            // If focused has reached to last focusable element then focus first focusable element after pressing tab
            if (document.activeElement === lastFocusableElement) {
                // Add focus for the first focusable element
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    });

    firstFocusableElement.focus();  
}

function closeModal() {
    myModal.style.display = "none";
    openModalBtn.focus();
    form.reset();
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(formIsValid()){
        console.log(this.data);
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
        displayError(email, "Vous devez enter une adresse mail valide");
        return false;
    } else {
        displaySuccess(email);
        return true;
    }
}

function validateMessage(message){
    if(message.value.length === 0 ){
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
    input.parentElement.dataset.errorVisible = "true";

    // display error msg
    input.parentElement.dataset.error = msg;
}

// Display success message
function displaySuccess(input){
   // display error border
    input.parentElement.dataset.errorVisible = "false";
    input.parentElement.dataset.error = "";
}


const formIsValid = () => {
    let firstnameIsVaild = validateFirstname(firstName),
    lastnameIsValid = validateLastname(lastName),
    emailIsValid = validateEmail(email),
    messageIsValid = validateMessage(message);

    let fielsIsValid = firstnameIsVaild && lastnameIsValid && emailIsValid && messageIsValid;

    if(fielsIsValid){
        this.data = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            message: message.value
        };
        return this.data;
    }
};

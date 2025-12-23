// Get references to all form elements.

const contactForm = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
const clearButton = document.getElementById('clearButton');

// To determine whether all form elements are filled correctly
let validForm = 0;

// Validate name

function validateName(name) {
    const letters = /^\p{L}+$/u;
    return letters.test(name);
}

// Validate email

function validateEmail() {
    //Standard RegEx for email addresses.
    const validDomain = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return validDomain.test(email.value);
}

function validateMessage() {
    return message.value.length > 20;
}

function showError(element, numberOfChild) {
    const displayError = document.querySelector(`.form-main-container div:nth-child(${numberOfChild}) small`);
    element.style.border = '2px solid var(--red-color)';
    displayError.classList.add('show-error');
}

function clearError(element, numberOfChild) {
    const displayError = document.querySelector(`.form-main-container div:nth-child(${numberOfChild}) small`);
    element.style.border = '2px solid green';
    displayError.classList.remove('show-error');
    validForm++;
}

function clearForm() {
    formData = new FormData(firstName.value, lastName.value, email.value, subject.value, message.value);
    console.log(formData);
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
}

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
});

submitButton.addEventListener('click', function () {
    validateName(firstName.value) ? clearError(firstName, 1) : showError(firstName, 1);
    validateName(lastName.value) ? clearError(lastName, 2) : showError(lastName, 2);
    validateEmail() ? clearError(email, 3) : showError(email, 3);
    validateMessage() ? clearError(message, 6) : showError(message, 6);
    if (validForm === 4) clearForm();
    validForm = 0;
});

class FormData {
    constructor(firstName, lastName, email, subject, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}
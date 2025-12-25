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

// The order of elements using nth:child in CSS
firstName.childIndex = 1;
lastName.childIndex = 2;
email.childIndex = 3;
phoneNumber.childIndex = 4;
subject.childIndex = 5;
message.childIndex = 6;

const lettersOnlyString = 'Letters only.';
const enterNameString = 'Enter a name.';
const validEmailString = 'Enter a valid email address.';
const enterEmailString = 'Enter an email address.'
// To determine whether all form elements are filled correctly
let validForm = 0;

// Validate name

function validateName(element, validateEmpty = false) {

    if (validateEmpty && element.value.length === 0) return true;

    const displayError = document.querySelector(`.form-main-container div:nth-child(${element.childIndex}) small`);

    if (!validateEmpty && element.value.length === 0) {
        displayError.innerHTML = enterNameString;
    }
    else {
        displayError.innerHTML = lettersOnlyString;
    }
    const letters = /^[\p{L} -']+$/u;
    return letters.test(element.value);
}

// Validate email

function validateEmail(validateEmpty = false) {
    //Standard RegEx for email addresses.
    const validDomain = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const displayError = document.querySelector(`.form-main-container div:nth-child(${email.childIndex}) small`);

    if (validateEmpty && email.value.length === 0) {
        return true;
    }
    if (validateEmpty && !validDomain.test(email.value)) {
        displayError.innerHTML = validEmailString;
        return false;
    }

    if (!validateEmpty && email.value.length === 0) {
        displayError.innerHTML = enterEmailString;
    }
    else if (!validateEmpty) {
        displayError.innerHTML = validEmailString;
        console.log('WHy is this running');
    }

    return validDomain.test(email.value);
}

function validatePhoneNumber() {
    const validNumbers = /^\+?[0-9 ]+$/;
    return validNumbers.test(phoneNumber.value);
}

function validateMessage() {
    return message.value.length > 20;
}

function showError(element, numberOfChild) {
    const displayError = document.querySelector(`.form-main-container div:nth-child(${numberOfChild}) small`);

    displayError.classList.add('show-error');
    element.classList.add('error');
}

function clearError(element, numberOfChild, validateEmpty = false) {
    const displayError = document.querySelector(`.form-main-container div:nth-child(${numberOfChild}) small`);

    if (validateEmpty && element.value.length === 0) {
        element.classList.add('neutral');
        element.classList.remove('error');
        element.classList.remove('success');
        displayError.classList.remove('show-error');
        return;
    }

    element.classList.add('success');
    element.classList.remove('error');
    displayError.classList.remove('show-error');
    validForm++;
}

function clearForm() {
    formData = new FormData(firstName.value, lastName.value, email.value, subject.value, message.value);

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
    validateName(firstName) ? clearError(firstName, firstName.childIndex) : showError(firstName, firstName.childIndex);
    validateName(lastName) ? clearError(lastName, lastName.childIndex) : showError(lastName, lastName.childIndex);
    validateEmail() ? clearError(email, email.childIndex) : showError(email, email.childIndex);
    validatePhoneNumber() ? clearError(phoneNumber, phoneNumber.childIndex) : showError(phoneNumber, phoneNumber.childIndex);
    validateMessage() ? clearError(message, message.childIndex) : showError(message, message.childIndex);
    if (validForm === 4) clearForm();
    validForm = 0;
});

firstName.addEventListener('blur', function () { validateName(this, true) ? clearError(this, firstName.childIndex, true) : showError(this, firstName.childIndex) });
lastName.addEventListener('blur', function () { validateName(this, true) ? clearError(this, lastName.childIndex, true) : showError(this, lastName.childIndex) });
email.addEventListener('blur', function () { validateEmail(true) ? clearError(this, email.childIndex, true) : showError(this, email.childIndex) });

class FormData {
    constructor(firstName, lastName, email, subject, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}
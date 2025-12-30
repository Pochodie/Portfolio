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
const successMessageContainer = document.getElementById('success-message');

// The order of elements using nth:child in CSS.
firstName.childIndex = 1;
lastName.childIndex = 2;
email.childIndex = 3;
phoneNumber.childIndex = 4;
subject.childIndex = 5;
message.childIndex = 6;
submitButton.childIndex = 7;
clearButton.childIndex = 7;
successMessageContainer.childIndex = 8;

// Contact form string constants.
const lettersOnlyString = 'Invalid characters.';
const enterNameString = 'Enter a name.';
const validEmailString = 'Enter a valid email address.';
const enterEmailString = 'Enter an email address.'
const enterPhoneNumberString = 'Enter a phone number';
const validPhoneNumberString = 'Enter a valid phone number';
const messageCounterString = ' / 20 characters.'
const formSuccessMessageStart = 'Thank you ';
const formSuccessMessageEnd = 'I will contact you soon!';

const messageMinimumCharacters = 20;

let formData = null;

function validateName(element, validateEmpty = false) {

    if (validateEmpty && element.value.length === 0) return true;

    const displayError = document.querySelector(`.form-main-container div:nth-child(${element.childIndex}) small`);

    if (!validateEmpty && element.value.length === 0) {
        displayError.innerHTML = enterNameString;
    }
    else {
        displayError.innerHTML = lettersOnlyString;
    }

    const letters = /^[\p{L}' -]+$/u;

    return letters.test(element.value);
}

function validateEmail(validateEmpty = false) {
    // Standard RegEx for email addresses.
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
    }

    return validDomain.test(email.value);
}

function validatePhoneNumber(validateEmpty = false) {
    // Standard RexEx for phone numbers.
    const validNumbers = /^\+?[0-9 ]+$/;
    const displayError = document.querySelector(`.form-main-container div:nth-child(${phoneNumber.childIndex}) small`);


    if (validateEmpty && phoneNumber.value.length === 0) {
        return true;
    }
    if (validateEmpty && !validNumbers.test(phoneNumber.value)) {
        displayError.innerHTML = validPhoneNumberString;
        return false;
    }

    if (!validateEmpty && phoneNumber.value.length === 0) {
        displayError.innerHTML = enterPhoneNumberString;
    }
    else if (!validateEmpty) {
        displayError.innerHTML = validPhoneNumberString;
    }

    return validNumbers.test(phoneNumber.value);
}

function validateMessage(validateEmpty = false) {
    const numberOfCharacters = message.value.replace(/\s+/g, "");


    if (validateEmpty && numberOfCharacters.length === 0) {
        return true;
    }

    if (validateEmpty && numberOfCharacters.length < 20) {
        return false;
    }


    const displayError = document.querySelector(`.form-main-container div:nth-child(${message.childIndex}) small`);
    displayError.innerHTML = numberOfCharacters.length + messageCounterString;

    numberOfCharacters.length < messageMinimumCharacters ? displayError.classList.remove('success') : displayError.classList.add('success');
    if (numberOfCharacters.length >= messageMinimumCharacters) clearError(message, true, message.classList.contains('error'));
    else showError(message, message.classList.contains('success'));

    showError(message, message.classList.contains('error'));

    if (numberOfCharacters.length === 0) clearError(message, true);

    minimumCharacters = numberOfCharacters.length >= messageMinimumCharacters;

    return minimumCharacters;
}

function showError(element, changeBorder = true) {
    const displayError = document.querySelector(`.form-main-container div:nth-child(${element.childIndex}) small`);

    displayError.classList.add('show-error');
    if (changeBorder) element.classList.add('error');
}


function clearError(element, validateEmpty = false, changeBorder = true) {
    const displayError = document.querySelector(`.form-main-container div:nth-child(${element.childIndex}) small`);

    if (validateEmpty && element.value.length === 0) {
        element.classList.add('neutral');
        element.classList.remove('error');
        element.classList.remove('success');
        displayError.classList.remove('show-error');
        return;
    }

    if (changeBorder) {
        element.classList.add('success');
        element.classList.remove('error');
    }

    displayError.classList.remove('show-error');

}

function clearForm(saveData = false) {

    if (saveData) {
        formData = new PersonData(firstName.value, lastName.value, email.value, subject.value, message.value);
        document.querySelectorAll('.form-main-container *').forEach(el => { el.classList.remove('success') });
        contactForm.reset();
    }

    else {

        document.querySelectorAll('.form-main-container *').forEach(el => { el.className = ''; });

        contactForm.className = 'form-main-container';
        successMessageContainer.className = 'success-message-container';
        contactForm.reset();

    }
}

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
});

submitButton.addEventListener('click', function () {
    let validForm = 0;

    if (validateName(firstName)) {
        clearError(firstName)
        validForm++
    }
    else showError(firstName);

    if (validateName(lastName)) {
        clearError(lastName)
        validForm++
    }
    else showError(lastName);

    if (validateEmail()) {
        clearError(email)
        validForm++
    }
    else showError(email);

    if (validatePhoneNumber()) {
        clearError(phoneNumber)
        validForm++
    }
    else showError(phoneNumber);

    if (validateMessage()) {
        clearError(message)
        validForm++
    }
    else showError(message);

    if (validForm === 5) {
        const successMessage = document.querySelector(`.form-main-container div:nth-child(${successMessageContainer.childIndex}) small`);
        successMessage.innerHTML = `${formSuccessMessageStart} ${firstName.value}! ${formSuccessMessageEnd}`;
        successMessage.classList.add('show-error');

        setTimeout(() => { successMessage.classList.remove('show-error') }, 3000);
        clearForm(true);
    }
});

clearButton.addEventListener('click', () => clearForm());

firstName.addEventListener('blur', function () { validateName(this, true) ? clearError(this, true) : showError(this) });
lastName.addEventListener('blur', function () { validateName(this, true) ? clearError(this, true) : showError(this) });
email.addEventListener('blur', function () { validateEmail(true) ? clearError(this, true) : showError(this) });
phoneNumber.addEventListener('blur', function () { validatePhoneNumber(true) ? clearError(this, true) : showError(this) });
message.addEventListener('blur', function () { validateMessage(true) ? clearError(this, true) : showError(this) });
message.addEventListener('input', function () { validateMessage() });

class PersonData {
    constructor(firstName, lastName, email, subject, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}
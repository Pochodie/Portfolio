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

// Validate name

function validateName() {
    const letters = /^\p{L}+$/u;
    const name = firstName.value + lastName.value;
    return letters.test(name);
}

// Validate email

function validateEmail() {
    //Standard RegEx for email addresses.
    const validDomain = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return validDomain.test(email.value);
}

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
})

submitButton.addEventListener('click', function () {
    console.log(validateEmail());
});


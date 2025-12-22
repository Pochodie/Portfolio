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

// Check that it works!

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
})

submitButton.addEventListener('click', function () {
    console.log(`${firstName.value}\n${lastName.value}\n${email.value}\n${phoneNumber.value}\n${subject.value}\n${message.value}`);
});
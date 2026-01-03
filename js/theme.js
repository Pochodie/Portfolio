const themeButtons = document.querySelectorAll('.theme-switcher button');

themeButtons.forEach(button => {
    button.addEventListener('click', (event) => clickButton(event.target));
});



function clickButton(button) {
    console.log(button.getAttribute('data-theme'));
}
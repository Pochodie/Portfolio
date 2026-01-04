const themeButtons = document.querySelectorAll('.theme-switcher button');
const darkBackground = document.getElementById('dark-background');
const lightBackground = document.getElementById('light-background');

themeButtons.forEach(button => {
    button.addEventListener('click', (event) => clickButton(event.target));
});



function clickButton(button) {
    const selectedTheme = button.getAttribute('data-theme');
    switch (selectedTheme) {
        case 'light-theme':
            document.body.classList.add('light-theme');
            darkBackground.classList.remove('visible');
            lightBackground.classList.add('visible');
            console.log(document.body.classList);
            break;
        case 'dark-theme':
            document.body.classList.remove('light-theme');
            lightBackground.classList.remove('visible');
            darkBackground.classList.add('visible');
            break;
    }
}
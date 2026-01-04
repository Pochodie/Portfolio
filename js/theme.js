const headerImage = document.getElementById('header-image');
const themeButtons = document.querySelectorAll('.theme-switcher button');

const darkBackground = document.getElementById('dark-background');
const lightBackground = document.getElementById('light-background');


themeButtons.forEach(button => {
    button.addEventListener('click', (event) => clickButton(event.target));
});



function clickButton(button) {
    const selectedTheme = button.getAttribute('data-theme');
    const imgElement = document.createElement('img');
    headerImage.replaceChildren();
    headerImage.classList.remove('visible');

    switch (selectedTheme) {
        case 'light-theme':
            document.body.classList.add('light-theme');
            darkBackground.classList.remove('visible');
            lightBackground.classList.add('visible');

            imgElement.src = 'assets/images/me_light.png';
            imgElement.alt = 'Photo of Daniel Stagno';
            headerImage.appendChild(imgElement);
            headerImage.classList.add('visible');

            break;
        case 'dark-theme':
            document.body.classList.remove('light-theme');
            lightBackground.classList.remove('visible');
            darkBackground.classList.add('visible');

            imgElement.src = 'assets/images/me.png';
            imgElement.alt = 'Photo of Daniel Stagno';
            headerImage.appendChild(imgElement);
            headerImage.classList.add('visible');
            break;
    }
}
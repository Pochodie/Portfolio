const headerMainContainer = document.querySelector('.header-main-container');
const headerLinksContainer = document.querySelector('.header-links-container');
const topOfPageContainer = document.querySelector('.top-of-page-container');
const footerMainContainer = document.querySelector('.footer-main-container');

const headerImage = document.getElementById('header-image');
const themeButtons = document.querySelectorAll('.theme-switcher button');

const darkBackground = document.getElementById('dark-background');
const lightBackground = document.getElementById('light-background');
const redBackground = document.getElementById('red-background');

const imgElement = document.createElement('img');

themeButtons.forEach(button => {
    button.addEventListener('click', (event) => clickButton(event.target));
});



function clickButton(button) {
    const selectedTheme = button.getAttribute('data-theme');

    headerImage.replaceChildren();
    headerImage.classList.remove('visible');
    headerMainContainer.className = 'header-main-container';

    document.body.className = '';

    switch (selectedTheme) {
        case 'light-theme':
            document.body.classList.add('light-theme');
            topOfPageContainer.classList.remove('red-theme');
            darkBackground.classList.remove('visible');
            redBackground.classList.remove('visible');
            lightBackground.classList.add('visible');

            imgElement.src = 'assets/images/me_light.png';
            imgElement.alt = 'Photo of Daniel Stagno';
            headerImage.appendChild(imgElement);
            headerImage.classList.add('visible');
            headerLinksContainer.classList.remove('light-theme');
            footerMainContainer.classList.remove('light-theme');
            headerMainContainer.classList.add('light-theme');
            headerLinksContainer.classList.add('light-theme');
            footerMainContainer.classList.add('light-theme');

            break;

        case 'dark-theme':

            lightBackground.classList.remove('visible');
            redBackground.classList.remove('visible');
            topOfPageContainer.classList.remove('red-theme');
            darkBackground.classList.add('visible');

            imgElement.src = 'assets/images/me.png';
            imgElement.alt = 'Photo of Daniel Stagno';
            headerImage.appendChild(imgElement);
            headerImage.classList.add('visible');

            headerLinksContainer.classList.remove('light-theme');
            footerMainContainer.classList.remove('light-theme');
            break;


        case 'red-theme':
            document.body.classList.add('red-theme');
            lightBackground.classList.remove('visible');
            darkBackground.classList.remove('visible');
            redBackground.classList.add('visible');
            topOfPageContainer.classList.add('red-theme');
            imgElement.src = 'assets/images/me.png';
            imgElement.alt = 'Photo of Daniel Stagno';
            headerImage.appendChild(imgElement);
            headerImage.classList.add('visible');

            headerLinksContainer.classList.remove('light-theme');
            footerMainContainer.classList.remove('light-theme');
            headerMainContainer.classList.add('red-theme');
            break;
    }
}

imgElement.src = 'assets/images/me.png';
imgElement.alt = 'Photo of Daniel Stagno';
headerImage.appendChild(imgElement);
headerImage.classList.add('visible')
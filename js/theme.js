const headerMainContainer = document.querySelector('.header-main-container');
const headerLinksContainer = document.querySelector('.header-links-container');
const topOfPageContainer = document.querySelector('.top-of-page-container');
const footerMainContainer = document.querySelector('.footer-main-container');
const backgroundMainContainer = document.querySelector('.background-main-container');


const headerImage = document.getElementById('header-image');
const themeButtons = document.querySelectorAll('.theme-switcher button');

const darkBackground = document.getElementById('dark-background');
const lightBackground = document.getElementById('light-background');
const redBackground = document.getElementById('red-background');

let previousSelectedThemeButton = null;

themeButtons.forEach(button => {
    button.addEventListener('click', (event) => loadTheme(event.target));
});

function selectActiveTheme(element) {

    if (element != previousSelectedThemeButton) {
        if (previousSelectedThemeButton != null) previousSelectedThemeButton.classList.remove('active');
        element.classList.add('active');
        previousSelectedThemeButton = element;
    }
}

function loadTheme(button) {
    let selectedTheme = sessionStorage.getItem('theme');

    console.log(selectedTheme);
    const imgElement = document.createElement('img');
    if (button != null) selectedTheme = button.getAttribute('data-theme');
    else if (selectedTheme === null) selectedTheme = 'dark-theme';


    switch (selectedTheme) {
        case 'dark-theme': selectActiveTheme(themeButtons[0]);
            break;
        case 'light-theme': selectActiveTheme(themeButtons[1]);
            break;
        case 'red-theme': selectActiveTheme(themeButtons[2]);
    }



    headerImage.replaceChildren();
    headerImage.className = 'header-image-container';
    headerMainContainer.className = 'header-main-container';
    headerLinksContainer.className = 'header-links-container';
    footerMainContainer.className = 'footer-main-container';
    backgroundMainContainer.className = 'background-main-container';

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

            if (button != null) {
                // for FireFox
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        imgElement.classList.add('visible')
                    });
                });
            }
            else {
                imgElement.classList.add('firstLoad');
                document.body.classList.add('firstLoad');

                headerMainContainer.classList.add('firstLoad');
                footerMainContainer.classList.add('firstLoad');

            }



            headerMainContainer.classList.add('light-theme');
            headerLinksContainer.classList.add('light-theme');
            footerMainContainer.classList.add('light-theme');
            sessionStorage.setItem('theme', 'light-theme');
            break;

        case 'dark-theme':

            darkBackground.classList.add('dark-background');
            lightBackground.classList.remove('visible');
            redBackground.classList.remove('visible');
            topOfPageContainer.classList.remove('red-theme');
            darkBackground.classList.add('visible');

            imgElement.src = 'assets/images/me.png';
            imgElement.alt = 'Photo of Daniel Stagno';

            headerImage.appendChild(imgElement);

            if (button != null) {
                // for FireFox
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        imgElement.classList.add('visible')
                    });
                });
            }
            else {
                imgElement.classList.add('firstLoad');
                document.body.classList.add('firstLoad');
                console.log('first load');
                headerMainContainer.classList.add('firstLoad');
                footerMainContainer.classList.add('firstLoad');
            }



            sessionStorage.setItem('theme', 'dark-theme');
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

            if (button != null) {
                // for FireFox
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        imgElement.classList.add('visible')
                    });
                });
            }
            else {
                imgElement.classList.add('firstLoad');
                document.body.classList.add('firstLoad');

                headerMainContainer.classList.add('firstLoad');
                footerMainContainer.classList.add('firstLoad');
            }



            footerMainContainer.classList.add('red-theme');
            headerMainContainer.classList.add('red-theme');
            headerLinksContainer.classList.add('red-theme');
            sessionStorage.setItem('theme', 'red-theme');
            break;
    }
}

window.addEventListener('load', function () {
    loadTheme(null);
});


class Project {
    // Each project is assigned an id in increasing order.
    static counter = 1;

    constructor(title, description, category, technologies, image, link) {
        this.id = Project.counter;
        this.title = title;
        this.description = description;
        this.category = category;
        this.technologies = technologies;
        this.image = image;
        this.link = link;
        Project.counter++;
    }
}

const projects = [];

// String constants for counter.
const counterStringStart = 'Showing';
const counterStringMiddle = 'of';
const counterStringEnd = 'projects.'

// References to HTML elements.
const mainContainer = document.getElementById('project-cards-container');
const filterButtonAll = document.getElementById('all');
const filterButtonMusic = document.getElementById('music');
const filterButtonWebDevelopment = document.getElementById('web-development');
const filterButtonSchoolProjects = document.getElementById('school-projects');
const projectsCounter = document.getElementById('projects-counter');

let previousSelectedFilterButton = filterButtonAll;
let firstLoad = true;

filterButtonAll.addEventListener('click', (event) => { filterCards(event.target); });
filterButtonMusic.addEventListener('click', (event) => { filterCards(event.target); });
filterButtonWebDevelopment.addEventListener('click', (event) => { filterCards(event.target); });
filterButtonSchoolProjects.addEventListener('click', (event) => { filterCards(event.target); });

projects.push(new Project(
    'Portfolio Website',
    'My personal portfolio.',
    'School Projects',
    ['HTML', 'CSS', 'JavaScript'],
    'assets/images/projects/portfolio_tn.jpg',
    'index.html'
));

projects.push(new Project(
    'Snooker scoreboard',
    'A scoreboard for snooker.',
    'Web Development',
    ['HTML', 'CSS', 'TypeScript'],
    'assets/images/projects/snooker.jpg',
    'https://example.com'
));

projects.push(new Project(
    'Play piano',
    'Practice Rachmaniniov.',
    'Music',
    ["notation", "chords"],
    'assets/images/music.jpg',
    'https://example.com'
));

projects.push(new Project(
    'JavaScript',
    'Make a dynamic website.',
    'School Projects',
    ['HTML', 'CSS', 'JavaScript'],
    'assets/images/projects/javascript.jpg',
    'https://example.com'
));

projects.push(new Project(
    'ATC Simulator',
    'Video game.',
    'Web Development',
    ['C#', '.NET 8.0', 'MonoGame'],
    'assets/images/projects/atcsimulator_gameplay_tn.jpg',
    'https://example.com'
));

projects.push(new Project(
    'Piano concerto',
    'Composing a piano concerto.',
    'Music',
    ['Notation', 'Dorico', 'Reaper'],
    'assets/images/projects/pianoconcerto_tn.jpg',
    'https://example.com'
));

projects.push(new Project(
    'FMC',
    'Route analyser.',
    'Web Development',
    ['Notation', 'Dorico', 'Reaper'],
    'assets/images/projects/fmc.jpg',
    'https://example.com'
));

projects.push(new Project(
    'Music for ATC Simulator',
    'Recording session.',
    'Music',
    ['Notation', 'Reaper'],
    'assets/images/projects/atcmusic.jpg',
    'https://example.com'
));

projects.push(new Project(
    'Mathematics',
    'Third assignment.',
    'School Projects',
    ['LaTeX', 'Calculator'],
    'assets/images/projects/math.jpg',
    'https://example.com'
));

// To highlight the active filter button.
function selectActiveButton(element) {
    if (element != previousSelectedFilterButton) {
        previousSelectedFilterButton.classList.remove('active');
        element.classList.add('active');
        previousSelectedFilterButton = element;
    }
}

// Dynamically creates HTML elements for each project card.
function createCards(category) {

    let numberOfCards = 0;

    // To make a smooth transition in 0.3s.
    setTimeout(() => {
        mainContainer.replaceChildren();

        projects.forEach(element => {

            if (numberOfCards < 6)
                if (element.category === category || category === 'All') {

                    const projectDiv = document.createElement('div');
                    if (!firstLoad) {
                        mainContainer.classList.remove('fadeout');
                        projectsCounter.classList.remove('fadeout');
                        mainContainer.classList.add('fadein');
                        projectsCounter.classList.add('fadein');
                    }

                    projectDiv.className = 'project-card';
                    const image = document.createElement('img');
                    const title = document.createElement('h3');
                    const description = document.createElement('p');
                    const labelCategory = document.createElement('label');
                    const link = document.createElement('a');
                    link.setAttribute('href', element.link);
                    link.setAttribute('target', '_blank');
                    link.textContent = 'View Project';
                    image.src = element.image;
                    image.style = 'width: 50%; object-fit: contain';
                    labelCategory.textContent = element.category;

                    description.textContent = element.description;
                    title.textContent = element.title;

                    projectDiv.appendChild(image);
                    projectDiv.appendChild(title);
                    projectDiv.appendChild(labelCategory);
                    projectDiv.appendChild(description);
                    projectDiv.appendChild(link);
                    mainContainer.appendChild(projectDiv);
                    numberOfCards++;


                }
        });

        // Update counter.
        projectsCounter.textContent = `${counterStringStart} ${numberOfCards} ${counterStringMiddle} ${projects.length} ${counterStringEnd}`;

    }, firstLoad ? 0 : 300);

}

function filterCards(sender) {

    // To not filter more than once if a filter button is clicked.
    if (sender === previousSelectedFilterButton && !firstLoad) return;

    const category = sender.getAttribute('data-category');

    // To fade out project cards if they have been loaded at least once.
    if (!firstLoad) {
        mainContainer.classList.remove('fadein');
        projectsCounter.classList.remove('fadein');
        mainContainer.classList.add('fadeout');
        projectsCounter.classList.add('fadeout');
    }

    createCards(category);

    firstLoad = false;
    selectActiveButton(sender);
}

filterCards(filterButtonAll);


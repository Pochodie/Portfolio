class Project {
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

const counterStringStart = 'Showing';
const counterStringMiddle = 'of';
const counterStringEnd = 'projects.'

const filterButtonAll = document.getElementById('all');
const filterButtonMusic = document.getElementById('music');
const filterButtonWebDevelopment = document.getElementById('web-development');
const filterButtonSchoolProjects = document.getElementById('school-projects');
const projectsCounter = document.getElementById('projects-counter');

let previousSelectedFilterButton = filterButtonAll;
let firstLoad = true;

filterButtonAll.addEventListener('click', (event) => { generateCards(event.target); });
filterButtonMusic.addEventListener('click', (event) => { generateCards(event.target); });
filterButtonWebDevelopment.addEventListener('click', (event) => { generateCards(event.target); });
filterButtonSchoolProjects.addEventListener('click', (event) => { generateCards(event.target); });

const newProject = new Project('Guitar', 'Building a guitar', 'Music', ['Wood', 'Metal'], 'assets/images/projects/pianoconcerto_tn.jpg', 'https://example.com');
const newProject2 = new Project('Game', 'Building a guitar', 'Music', ['Wood', 'Metal'], 'assets/images/projects/pianoconcerto_tn.jpg', 'https://example.com');

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



function selectActiveButton(element) {
    if (element != previousSelectedFilterButton) {
        previousSelectedFilterButton.classList.remove('active');
        element.classList.add('active');
        previousSelectedFilterButton = element;
    }
}

function generateCards(sender) {


    if (sender === previousSelectedFilterButton && !firstLoad) return;

    const mainContainer = document.getElementById('project-cards-container');
    const category = sender.getAttribute('data-category');

    if (mainContainer.children.length > 0) {
        mainContainer.classList.remove('fadein');
        projectsCounter.classList.remove('fadein');
        mainContainer.classList.add('fadeout');
        projectsCounter.classList.add('fadeout');
    }

    let numberOfCards = 0;

    setTimeout(() => {
        mainContainer.replaceChildren();


        projects.forEach(element => {

            if (element.category === category || category === 'All') {

                const projectDiv = document.createElement('div');
                if (!firstLoad) {
                    mainContainer.classList.remove('fadeout');
                    projectsCounter.classList.remove('fadeout');
                    mainContainer.classList.add('fadein');
                    projectsCounter.classList.add('fadein');
                }

                projectDiv.className = 'project-card';
                const h3 = document.createElement('h3');
                const description = document.createElement('p');
                const image = document.createElement('img');
                const labelCategory = document.createElement('label');
                const link = document.createElement('a');
                link.setAttribute('href', element.link);
                link.setAttribute('target', '_blank');
                link.textContent = element.link;
                image.src = element.image;
                image.style = 'width: 50%; object-fit: contain';
                labelCategory.textContent = element.category;

                description.textContent = element.description;
                h3.textContent = element.title;

                projectDiv.appendChild(image);
                projectDiv.appendChild(h3);
                projectDiv.appendChild(labelCategory);
                projectDiv.appendChild(description);

                projectDiv.appendChild(link);
                mainContainer.appendChild(projectDiv);
                numberOfCards++;
            }
        });

        projectsCounter.textContent = `${counterStringStart} ${numberOfCards} ${counterStringMiddle} ${projects.length} ${counterStringEnd}`;

    }, firstLoad ? 0 : 250);

    firstLoad = false;
    selectActiveButton(sender);
}

generateCards(filterButtonAll);


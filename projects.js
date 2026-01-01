const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio",
        category: "Web Development",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "assets/images/projects/portfolio_tn.jpg",
        link: "index.html"

    },
    {
        id: 2,
        title: "Snooker scoreboard",
        description: "A scoreboard for snooker",
        category: "Web Development",
        technologies: ["HTML", "CSS", "TypeScript"],
        image: "assets/images/projects/snooker.jpg",
        link: "https://example.com"

    },
    {
        id: 3,
        title: "Play piano",
        description: "Practice scales",
        category: "Music",
        technologies: ["notation", "chords"],
        image: "assets/images/music.jpg",
        link: "https://example.com"

    },
    {
        id: 4,
        title: "JavaScript",
        description: "Make a dynamic website",
        category: "School Projects",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "assets/images/projects/snooker.jpg",
        link: "https://example.com"

    },
    {
        id: 5,
        title: "ATC Simulator",
        description: "Video game",
        category: "Development",
        technologies: ["C#", ".NET 8.0", "MonoGame"],
        image: 'assets/images/projects/atcsimulator_gameplay_tn.jpg',
        link: "https://example.com"

    },
    {
        id: 6,
        title: "Piano concerto",
        description: "Composing a piano concerto.",
        category: "Music",
        technologies: ["Notation", "Dorico", "Reaper"],
        image: "assets/images/projects/pianoconcerto_tn.jpg",
        link: "https://example.com"

    }


];

const filterButtonAll = document.getElementById('all');
const filterButtonMusic = document.getElementById('music');
const filterButtonWebDevelopment = document.getElementById('web-development');
const filterButtonSchoolProjects = document.getElementById('school-projects');
let previousSelectedFilterButton = filterButtonAll;
let firstLoad = true;

filterButtonAll.addEventListener('click', (event) => { generateCards(event.target, 'All'); });
filterButtonMusic.addEventListener('click', (event) => { generateCards(event.target, 'Music'); });
filterButtonWebDevelopment.addEventListener('click', (event) => { generateCards(event.target, 'Web Development'); });
filterButtonSchoolProjects.addEventListener('click', (event) => { generateCards(event.target, 'School Projects'); });

function selectActiveButton(element) {
    if (element != previousSelectedFilterButton) {
        previousSelectedFilterButton.classList.remove('active');
        element.classList.add('active');
        previousSelectedFilterButton = element;
    }
}

function generateCards(sender, category) {


    if (sender === previousSelectedFilterButton && !firstLoad) return;

    const mainContainer = document.getElementById('project-cards-container');

    if (mainContainer.children.length > 0) {
        Array.from(mainContainer.children).forEach(element => { element.classList.add('fadeout'); console.log(element) });
    }


    let numberOfCards = 0;

    setTimeout(() => {
        mainContainer.replaceChildren();
        projects.forEach(element => {


            if (element.category === category || category === 'All') {

                const projectDiv = document.createElement('div');
                firstLoad ? projectDiv.className = 'project-card' : projectDiv.className = 'project-card fadein';
                const h3 = document.createElement('h3');
                const description = document.createElement('p');
                const image = document.createElement('img');
                const labelCategory = document.createElement('label');
                const link = document.createElement('a');
                link.href = element.link;
                link.target = '_blank'
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
    }, firstLoad ? 0 : 250);

    selectActiveButton(sender);
    firstLoad = false;
}

generateCards(filterButtonAll, 'All');
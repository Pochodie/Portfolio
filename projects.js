const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio built with HTML, CSS, and JavaScript",
        category: "Web Development",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "assets/images/projects/snooker.jpg",
        link: "https://example.com"
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
        image: "assets/images/projects/snooker.jpg",
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
        category: "Music",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "assets/images/projects/snooker.jpg",
        link: "https://example.com"
    },
    {
        id: 6,
        title: "Piano concerto",
        description: "Composing a piano concerto.",
        category: "Music",
        technologies: ["Notation", "Dorico", "Reaper"],
        image: "assets/images/projects/snooker.jpg",
        link: "https://example.com"
    }


];

function generateCards(category) {

    const mainContainer = document.getElementById('project-cards-container');
    mainContainer.replaceChildren();
    let numberOfCards = 0;

    projects.forEach(element => {


        if (element.category === category || category === 'all') {

            const projectDiv = document.createElement('div');
            projectDiv.className = 'project-card';
            const h3 = document.createElement('h3');
            const description = document.createElement('p');
            const image = document.createElement('img');
            const labelCategory = document.createElement('label');
            const link = document.createElement('a');
            link.href = '#';
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

}

generateCards('all');
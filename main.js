// // Create object to store data needed for the this branch feature
const projects = [
  {
    name: 'Connect-With-Mentor React Web App',
    number: 1,
    description: `A web app where users can find mentors for career support deployed on Netlify.
    Implemented log-in/sign-up/mentor database with firebase.
    Connected to Mailchimp API to send confirmation email Website.
    `,
    technologies: ['Firebase', 'ReactJS', 'Redux',  'Styled Component'],
    image: {
      imageUrl: './Images/mwm1.jpg',
      imageAltText: 'Connect-With-Mentor Home Page',
    },
    links: ['https://meet-mentor.netlify.app', 'https://github.com/wsong5077/origin.git'],
  },
  {
    name: 'Study Hub React Web App',
    number: 2,
    description: `Users can post articles, videos and images and view posts of others.
    Built with React, Redux, Firebase.`,
    technologies: ['React', 'Redux', 'Firebase', 'JS'],
    image: {
      imageUrl: './Images/sh1.jpg',
      imageAltText: 'Study Hub',
    },
    links: ['https://study-hub-pomodoro.netlify.app', 'https://github.com/wsong5077/study-hub-v2.git'],
  },
  
];

// Create the cards section dynamically using string literals
function createCard1(project) {
  const cardString = `<section class="work-container">
  <article class="cards-container reverse-div${project.number} display-flex">
    <div class="placeholder">
    <img class="project-snapshot1" src="${project.image.imageUrl}" alt="${project.image.imageAltText}"/>
    </div>
    <div class="details-div display-flex">
      <div class="cards-header display-flex">
        <h3 class="style">${project.name}</h3>
      </div>
      <div class="card-info">
        <p class="style">
        ${project.description}
        </p>
      </div>
      <ul class="languages-div">
        <li class="lang style">${project.technologies[0]}</li>
        <li class="lang style">${project.technologies[1]}</li>
        <li class="lang style">${project.technologies[2]}</li>
        <li class="ruby lang style">${project.technologies[3]}</li>
      </ul>
      <div class="btn-div">
        <button data-target="modal${project.number}" type="button" class="see-project">
          See Project
        </button>
      </div>
    </div>
  </article>
</section>`;
  return cardString;
}

function createModal(project) {
  const modalInner = `
    <div class="pop-up-container display-flex" id="modal${project.number}">
    <img class="closing-button" src="./Images/Closing-Icon.png" alt="Closing Icon">
      <div class="modal-window modal${project.number}">
        <div class="title-container display-flex style">
          <h2>${project.name}</h2>
        </div>
        <div class="image-placeholder display-flex">
          <img class="snapshot1" src="${project.image.imageUrl}" alt="${project.image.imageAltText}">
          <img class="snapshot2" src= "${project.image.imageUrl}" alt="${project.image.imageAltText}">
        </div>
        <div class="card-description display-flex">
          <p class="card-text style">${project.description}</p>
        </div>
        <div class="card-badges display-flex">
          <h4 class="badge html">${project.technologies[0]}</h4>
          <h4 class="badge">${project.technologies[1]}</h4>
          <h4 class="badge">${project.technologies[2]}</h4>
          <h4 class="badge github">${project.technologies[3]}</h4>
        </div>
        <div class="links-div display-flex">
          <a href= ${project.links[0]} class="live-link">
            See Live
            <img class="live-icon" src="./Images/Live-Icon.png" alt="Live Icon">
          </a>
          <a href= ${project.links[1]} class="source-link">See Source
            <img class="github-icon" src="./Images/Github-Logo.png" alt="Github Icon">
          </a>
        </div>
      </div>
    </div>`;
  return modalInner;
}

const projectContainer = document.querySelector('main');

projects.forEach((card) => {
  projectContainer.innerHTML += createCard1(card);
});

const modalContainer = document.getElementById('modal-container');

projects.forEach((modal) => {
  modalContainer.innerHTML += createModal(modal);
});

// Create functions that opens and close the popup window when see-project button is clicked
const projectButtons = document.querySelectorAll('.see-project');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = document.getElementById(button.dataset.target);
    const modalWindows = document.querySelectorAll('.modal-window');
    currentModal.classList.add('active');
    modalWindows.forEach((window) => {
      window.classList.remove('remove-zoom');
      window.classList.add('add-zoom');
    });
    currentModal.style.display = 'flex';
  });
});

const closingButtons = document.querySelectorAll('.closing-button');

closingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = document.querySelector('.active');
    const modalWindows = document.querySelectorAll('.modal-window');
    modalWindows.forEach((window) => {
      window.classList.remove('add-zoom');
      window.classList.add('remove-zoom');
    });
    setTimeout(() => {
      currentModal.classList.remove('active');
      currentModal.style.display = 'none';
    }, 1000);
  });
});

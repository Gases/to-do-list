// eslint-disable-next-line import/no-mutable-exports
let projects = JSON.parse(localStorage.projects);

const createProject = () => {
  const name = document.querySelector('.project-name');
  projects.push(name.value);
  window.localStorage.setItem('projects', JSON.stringify(projects));
};

const displayProjects = () => {
  const projectsDiv = document.querySelector('.projects');

  projectsDiv.innerHTML = '';

  projects.forEach((project) => {
    const line = document.createElement('div');
    line.classList.add('project-item');
    line.innerHTML = `
    <p>${project}</p>
    <div class="modify">
        <p><i class="fas fa-edit"></i></p>
        <p><i class="fas fa-trash"></i></p>
    </div>
    `;

    projectsDiv.appendChild(line);
  });
};

const newProject = () => {
  const allProjects = document.querySelector('.projects');
  const project = document.createElement('div');
  project.classList.add('all-projects');
  project.innerHTML = `
  <input type="textarea" class="project-name" rows="1" required maxlength="10" placeholder="New project name" />
  <button type="submit" class="add-project">+</button>
  `;
  allProjects.appendChild(project);

  const addProject = document.querySelectorAll('.add-project');
  addProject.forEach((button) => button.addEventListener('click', () => {
    createProject();
    displayProjects(projects);
  }));
};

export { newProject, displayProjects, projects };

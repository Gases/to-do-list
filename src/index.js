import { newEventForm } from './events';
import { newProject } from './projects';
import { displayToday } from './today';
import { displayUpcoming } from './upcoming';
import { displayInbox } from './inbox';
import './style.css';
/*
import { createProject, allProjects } from './projects';
*/

const item = document.querySelectorAll('.item');
item.forEach((one) => one.addEventListener('click', () => {
  switch (one.id) {
    case 'inbox':
      displayInbox();
      break;
    case 'today':
      displayToday();
      break;
    case 'upcoming':
      displayUpcoming();
      break;
    case 'add-item':
      newEventForm();
      break;
    case 'add-project':
      newProject();
      break;
    default:
      displayInbox();
  }
}));

import { newEventForm, displayEvents } from './events';
import populateToday from './today';
import populateUpcoming from './upcoming';
import populateInbox from './inbox';
import './style.css';
/*
import { createProject, allProjects } from './projects';
import { newProject } from './projects';
*/

const item = document.querySelectorAll('.item');
item.forEach((one) => one.addEventListener('click', () => {
  switch (one.id) {
    case 'inbox':
      populateInbox();
      displayEvents(populateInbox());
      break;
    case 'today':
      populateToday();
      displayEvents(populateToday());
      break;
    case 'upcoming':
      populateUpcoming();
      displayEvents(populateUpcoming());
      break;
    case 'add-item':
      newEventForm();
      break;
    // case 'add-project':
    //  newProject();
    //  break;
    default:
      break;
  }
}));

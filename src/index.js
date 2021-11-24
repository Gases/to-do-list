import { newEventForm, displayEvents, events } from './events';
import populateToday from './today';
import populateUpcoming from './upcoming';
import populateInbox from './inbox';
import './style.css';
/*
import { createProject, allProjects } from './projects';
import { newProject } from './projects';
*/

displayEvents(events);

const item = document.querySelectorAll('.item');
item.forEach((one) => one.addEventListener('click', () => {
  switch (one.id) {
    case 'inbox':
      displayEvents(populateInbox());
      break;
    case 'today':
      displayEvents(populateToday());
      break;
    case 'upcoming':
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

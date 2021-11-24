import { newEventForm, displayEvents, events } from './events';
import { newProject, displayProjects, projects } from './projects';
import populateToday from './today';
import populateUpcoming from './upcoming';
import populateInbox from './inbox';
import './style.css';

displayEvents(events);
displayProjects(projects);

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
    case 'new-project':
      newProject();
      break;
    default:
      break;
  }
}));

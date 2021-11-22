import { newEventForm, displayEvents, events } from './events';
import { today, populateToday } from './today';
import { upcoming, populateUpcoming } from './upcoming';
import { inbox, populateInbox } from './inbox';
import './style.css';
/*
import { createProject, allProjects } from './projects';
import { newProject } from './projects';
*/

const item = document.querySelectorAll('.item');
item.forEach((one) => one.addEventListener('click', () => {
  switch (one.id) {
    case 'inbox':
      populateInbox(events);
      displayEvents(inbox);
      break;
    case 'today':
      populateToday(events);
      displayEvents(today);
      break;
    case 'upcoming':
      populateUpcoming(events);
      displayEvents(upcoming);
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

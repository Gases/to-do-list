import { newEventForm } from './events';
import { newProject } from './projects';
import { todayDisplay } from './today';
import { upcomingDisplay } from './upcoming';
import './style.css';
/*
import { createProject, allProjects } from './projects';
import { inboxDisplay } from './inbox';
*/

const item = document.querySelectorAll('.item');
item.forEach((one) => one.addEventListener('click', () => {
  switch (one.id) {
    case 'inbox':
      inboxDisplay();
      break;
    case 'today':
      todayDisplay();
      break;
    case 'upcoming':
      upcomingDisplay();
      break;
    case 'add-item':
      newEventForm();
      break;
    case 'add-project':
      newProject();
    default:
      inboxDisplay();
  }
}));

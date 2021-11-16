import { newEventForm } from './events';
import './style.css';
/*
import { createProject, allProjects } from './projects';
import { inboxDisplay } from './inbox';
import { todayDisplay } from './today';
import { upcomingDisplay } from './upcoming';
*/

const container = document.querySelector('.container');

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
    default:
      inboxDisplay();
  }
}));

export { container };

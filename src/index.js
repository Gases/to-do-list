/*
import { createEvent, allEvents } from './events';
import './style.css';
import { createProject, allProjects } from './projects';
import { inboxDisplay } from './inbox';
import { todayDisplay } from './today';
import { upcomingDisplay } from './upcoming';
*/

const item = document.querySelectorAll('.item');
item.forEach((one) => one.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'inbox':
      inboxDisplay();
      break;
    case 'today':
      todayDisplay();
      break;
    case 'upcoming':
      upcomingDisplay();
      break;
    default:
      inboxDisplay();
  }
}));

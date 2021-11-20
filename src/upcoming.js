// eslint-disable-next-line import/no-extraneous-dependencies
import { isToday, parseISO } from 'date-fns';
import { events } from './events';

let upcoming = [];

function populateUpcoming() {
  events.forEach((event) => {
    if (!isToday(parseISO(event.dueDate))) {
      upcoming.push(event);
    }
  });

  upcoming = [...new Set(upcoming)];
}

const displayUpcoming = () => {
  const container = document.querySelector('.container');

  container.innerHTML = '';

  populateUpcoming();
  upcoming.forEach((event) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="check-title">
      <input type="checkbox" /> 
      <h2 class="event-title">${event.title}</h2>
    </div>
    <h3 class="event-description">${event.description}</h3>
    <div class="card-bottom">
      <p class="event-due-date">Due date: ${event.dueDate}</p>
      <p><i class="fas fa-trash"></i></p>
    </div>
    `;

    container.appendChild(card);
  });
};

export default displayUpcoming;

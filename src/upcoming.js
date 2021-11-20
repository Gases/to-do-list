// eslint-disable-next-line import/no-extraneous-dependencies
import isToday from 'date-fns';
import events from './events';

let upcoming = [];

const populateUpcoming = () => {
  events.forEach((event) => {
    if (!isToday(event.dueDate)) {
      upcoming.push(event);
    }
  });
};

const upcomingDisplay = () => {
  const container = document.querySelector('.container');

  container.innerHTML = '';

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

export { upcomingDisplay };

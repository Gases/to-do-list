import { container } from './index';

const events = {};

class Event {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

const newEventForm = () => {
  const newEvent = document.createElement('div');
  newEvent.classList.add('new-event');
  newEvent.innerHTML = `
  <textarea class="event-title" placeholder="Insert your event title" required maxlength="50" rows="1"></textarea>
  <textarea class="event-description" placeholder="Describe this event" required maxlength="100" rows="3"></textarea>
  <div class="date">
    <label for="due-date">Due date</label>
    <input type="date" name="due-date"/>
  </div>
  <button type="submit" class="add-event">Add event</button>`;
  container.appendChild(newEvent);
};

const createEvent = () => {
  const title = document.querySelector('.event-title');
  const description = document.querySelector('.event-description');
  const dueDate = document.querySelector('.date');

  const event = new Event(title, description, dueDate);
  events.push(event);
};


const displayEvent = () => {
  const card = document.createElement('div');
  card.classList.add('card');

  for (const event in events) {

  }
};

const addEvent = document.querySelectorAll('.add-event');
addEvent.addEventListener('click', () => {
  
  createEvent();
});

export { newEventForm,  displayEvent };

let events = [];

class Event {
  constructor(title, description, dueDate) {
    this.title = title;
    this.id = `${title.split(' ').join('-')}-${parseInt(Math.random() * 100, 10)}`;
    this.description = description;
    this.dueDate = dueDate;
  }
}

const createEvent = () => {
  const title = document.querySelector('.create-title');
  const description = document.querySelector('.create-description');
  const dueDate = document.querySelector('.create-due-date');

  const event = new Event(title.value, description.value, dueDate.value);
  events.push(event);
};

function deleteEvent(card) {
  events = events.filter((event) => event.id !== card.id);
}

const displayEvents = (date) => {
  const container = document.querySelector('.container');

  container.innerHTML = '';

  date.forEach((event) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `${event.id}`;
    card.innerHTML = `
    <div class="check-title">
      <h2 class="event-title">${event.title}</h2>
      <input type="checkbox" /> 
    </div>
    <h3 class="event-description">${event.description}</h3>
    <div class="card-bottom">
      <p class="event-due-date">Due date: ${event.dueDate}</p>
      <p><i class="fas fa-trash"></i></p>
    </div>
    `;

    container.appendChild(card);
  });

  const card = document.querySelectorAll('.card');
  card.forEach((one) => one.addEventListener('click', function (e) {
    if (!e.target.classList.contains('fa-trash')) {
      return;
    }
    deleteEvent(this);
    displayEvents(events);
  }));
};

const newEventForm = () => {
  const container = document.querySelector('.container');
  const newEvent = document.createElement('div');
  newEvent.classList.add('new-event');

  newEvent.innerHTML = `
  <textarea class="create-title" placeholder="Insert your event title" required maxlength="50" rows="1"></textarea>
  <textarea class="create-description" placeholder="Describe this event" required maxlength="100" rows="3"></textarea>
  <div class="date">
    <label for="due-date">Due date</label>
    <input class="create-due-date" type="date" name="due-date" />
  </div>
  <button type="submit" class="add-event">Add event</button>`;
  container.appendChild(newEvent);

  const addEvent = document.querySelectorAll('.add-event');
  addEvent.forEach((button) => button.addEventListener('click', () => {
    createEvent();
    displayEvents(events);
  }));
};

export { displayEvents, newEventForm, events };

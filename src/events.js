const events = [];

class Event {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

const displayEvents = () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  events.forEach((event) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="check-title">
      <input type="checkbox" /> 
      <h2 class="event-title">${event.title}</h2>
    </div>
    <h3 class="event-description">${event.description}</h3>
    <p class="event-due-date">Due date: ${event.dueDate}</p>
    `;

    container.appendChild(card);
  });
};

const createEvent = () => {
  const title = document.querySelector('.create-title');
  const description = document.querySelector('.create-description');
  const dueDate = document.querySelector('.create-due-date');

  const event = new Event(title.value, description.value, dueDate.value);
  events.push(event);
  console.log(events);
  displayEvents();
};

const newEventForm = (container) => {
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
  addEvent.forEach((button) => button.addEventListener('click', createEvent));
};

export { newEventForm, displayEvents };

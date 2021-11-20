const events = [];

class Event {
  constructor(title, description, dueDate) {
    this.title = title;
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
  }));
};

export { newEventForm, events };

// eslint-disable-next-line import/no-extraneous-dependencies
import { isToday, parseISO } from 'date-fns';
import { events } from './events';

function populateUpcoming() {
  const upcoming = [];

  events.forEach((event) => {
    if (!isToday(parseISO(event.dueDate))) {
      upcoming.push(event);
    }
  });

  return [...new Set(upcoming)];
}

export default populateUpcoming;

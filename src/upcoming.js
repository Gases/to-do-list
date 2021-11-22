// eslint-disable-next-line import/no-extraneous-dependencies
import { isToday, parseISO } from 'date-fns';

let upcoming = [];

function populateUpcoming(events) {
  events.forEach((event) => {
    if (!isToday(parseISO(event.dueDate))) {
      upcoming.push(event);
    }
  });

  upcoming = [...new Set(upcoming)];
}

export { upcoming, populateUpcoming };

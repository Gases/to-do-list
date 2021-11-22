// eslint-disable-next-line import/no-extraneous-dependencies
import { isToday, parseISO } from 'date-fns';

let today = [];

function populateToday(events) {
  events.forEach((event) => {
    if (isToday(parseISO(event.dueDate))) {
      today.push(event);
    }
  });

  today = [...new Set(today)];
}

export { today, populateToday };

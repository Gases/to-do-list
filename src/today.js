// eslint-disable-next-line import/no-extraneous-dependencies
import { isToday, parseISO } from 'date-fns';
import { events } from './events';

const populateToday = () => {
  const today = [];

  events.forEach((event) => {
    if (isToday(parseISO(event.dueDate))) {
      today.push(event);
    }
  });

  return [...new Set(today)];
};

export default populateToday;

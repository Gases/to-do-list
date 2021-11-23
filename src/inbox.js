import { events } from './events';

const populateInbox = () => {
  const inbox = [];

  events.forEach((event) => {
    inbox.push(event);
  });

  return [...new Set(inbox)];
};

export default populateInbox;

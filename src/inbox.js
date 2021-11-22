// eslint-disable-next-line import/no-extraneous-dependencies
let inbox = [];

function populateInbox(events) {
  events.forEach((event) => {
    inbox.push(event);
  });

  inbox = [...new Set(inbox)];
}

export { inbox, populateInbox };

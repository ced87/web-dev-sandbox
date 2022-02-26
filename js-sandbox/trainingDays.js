// The scope of `random` is too loose

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const playerName = 'Jane';
const athleticEvent = getRandEvent();
const days = getTrainingDays(athleticEvent);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(playerName, athleticEvent);
logTime(playerName, days);

const athleticEvent2 = getRandEvent();
const days2 = getTrainingDays(athleticEvent2);
const playerName2 = 'Warren';

logEvent(playerName2, athleticEvent2);
logTime(playerName2, days2);

const data = require('../data/zoo_data');

const { species } = data;
const allAnimals = species.map((element) => element.name);
const daysOfWeek = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return daysOfWeek;
  } if (allAnimals.includes(scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  } if (weekDays.includes(scheduleTarget)) {
    const key = scheduleTarget;
    const obj = {};
    obj[key] = daysOfWeek[key];
    return obj;
  } return daysOfWeek;
}
// console.log(getSchedule('Monday'))
module.exports = getSchedule;

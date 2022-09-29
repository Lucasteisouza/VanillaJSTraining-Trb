const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const { residents } = species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age >= age);
}

// console.log(getAnimalsOlderThan('penguins',10))
module.exports = getAnimalsOlderThan;

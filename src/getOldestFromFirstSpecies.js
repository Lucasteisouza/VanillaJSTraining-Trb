const data = require('../data/zoo_data');

const { employees, species } = data;
function getOldestFromFirstSpecies(id) {
  const firstResponsible = employees.find((element) => id === element.id).responsibleFor[0];
  const responsibleSpecies = species.find((element) => element.id === firstResponsible);
  const SA = responsibleSpecies.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return [SA.name, SA.sex, SA.age];
}

module.exports = getOldestFromFirstSpecies;

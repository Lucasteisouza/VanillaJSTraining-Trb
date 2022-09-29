const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const selectedAnimal = (anyAnimal) => {
  const speciesObj = species.find((element) => anyAnimal.specie === element.name);
  if (anyAnimal.sex === undefined) {
    return speciesObj.residents.length;
  } const { residents } = speciesObj;
  return residents.filter((element) => element.sex === anyAnimal.sex).length;
};

function countAnimals(animal) {
  const allAnimalsCounter = {};
  if (animal === undefined) {
    species.forEach((element) => {
      allAnimalsCounter[element.name] = element.residents.length;
    });
    return allAnimalsCounter;
  } return selectedAnimal(animal);
}

// console.log(selectedAnimal({ specie: 'lions', sex: 'male' }));
// console.log(countAnimals({ specie : 'lions'}));
module.exports = countAnimals;

const data = require('../data/zoo_data');

const { species } = data;

const locationizer = (direction) => species.filter((element) => element.location === direction);

const allAnimalsAllLocation = () => {
  const animalObj = { NE: locationizer('NE').map((element) => element.name) };
  animalObj.NW = locationizer('NW').map((element) => element.name);
  animalObj.SE = locationizer('SE').map((element) => element.name);
  animalObj.SW = locationizer('SW').map((element) => element.name);
  return animalObj;
};

function getAnimalMap(opt) {
  if (opt === undefined || opt.includeNames === false || opt.includeNames === undefined) {
    return allAnimalsAllLocation();
  }
}

console.log(getAnimalMap());

module.exports = getAnimalMap;

const data = require('../data/zoo_data');

const { employees, species } = data;

function getSpeciesByIds(ids) {
  const selectedIds = [];
  ids.forEach((element) =>{
    selectedIds.push(species.find((specie) => specie.id === element).name)
  });
  return selectedIds;
}

const getSpeciesLocations = (anim) => {
  const locArr = [];
  anim.forEach((anima) => locArr.push(species.find((element) => element.name === anima).location));
  return locArr;
};

const allEmployees = () => employees.map((element) => {
  const obj = { id: element.id };
  obj.fullName = `${element.firstName} ${element.lastName}`;
  const responsible = element.responsibleFor;
  obj.species = getSpeciesByIds(responsible);
  obj.locations = getSpeciesLocations(obj.species);
  return obj;
});

function getEmployeesCoverage(nameOrId) {
  if (nameOrId === undefined) {
    return allEmployees();
  }
}
// console.log (employees)
console.log(getEmployeesCoverage());
// console.log(getSpeciesLocations(['lions']))
module.exports = getEmployeesCoverage;

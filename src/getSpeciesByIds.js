const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const selectedIds = [];
  ids.forEach((element) =>{
    selectedIds.push(species.find((specie) => specie.id === element))
  });
  return selectedIds;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;

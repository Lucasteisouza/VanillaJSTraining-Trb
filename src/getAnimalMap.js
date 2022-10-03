const data = require('../data/zoo_data');

const { species } = data;

const residentsBySpecies = (animal) => {
  const currSpecie = species.find((element) => element.name === animal);
  const currSpeciesRes = currSpecie.residents.map((element) => element.name);
  return currSpeciesRes;
};

const residentsBySpeciesAndSex = (animal, sex) => {
  const sexo = sex;
  const speciesCopy = species.map((element) => element);
  const currSpecie = speciesCopy.find((element) => element.name === animal);
  const { residents } = currSpecie;
  const currSpecieSexed = residents.filter((element) => element.sex === sexo);
  const currSpeciesRes = currSpecieSexed.map((element) => element.name);
  return currSpeciesRes;
};

const residentsBySpeciesBySexSorted = (animal, sex) => {
  const sexo = sex;
  const speciesCopy = JSON.parse(JSON.stringify(species));
  const currSpecie = speciesCopy.find((element) => element.name === animal);
  currSpecie.residents.sort((a, b) => (a.name > b.name ? 1 : -1));
  const { residents } = currSpecie;
  const currSpecieSexed = residents.filter((element) => element.sex === sexo);
  const currSpeciesRes = currSpecieSexed.map((element) => element.name);
  return currSpeciesRes;
};

const residentsBySpeciesSorted = (animal) => {
  const speciesCopy = JSON.parse(JSON.stringify(species));
  const currSpecie = speciesCopy.find((element) => element.name === animal);
  currSpecie.residents.sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(speciesCopy[0])
  const currSpeciesRes = currSpecie.residents.map((element) => element.name);
  return currSpeciesRes;
};

const animalSpeciesByRegion = () => {
  const obj = { NE: species.filter((element) => element.location === 'NE').map((e) => e.name) };
  obj.NW = species.filter((element) => element.location === 'NW').map((e) => e.name);
  obj.SE = species.filter((element) => element.location === 'SE').map((e) => e.name);
  obj.SW = species.filter((element) => element.location === 'SW').map((e) => e.name);
  return obj;
};

const includeNamesNotSorted = () => {
  const obj = { NE: '' };
  obj.NE = animalSpeciesByRegion().NE.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpecies(specie) };
    return specRes;
  });
  obj.NW = animalSpeciesByRegion().NW.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpecies(specie) };
    return specRes;
  });
  obj.SE = animalSpeciesByRegion().SE.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpecies(specie) };
    return specRes;
  });
  obj.SW = animalSpeciesByRegion().SW.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpecies(specie) };
    return specRes;
  });
  return obj;
};

const includeNamesNotSortedWithSex = (option) => {
  const obj = { NE: '' };
  obj.NE = animalSpeciesByRegion().NE.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpeciesAndSex(specie, option.sex) };
    return specRes;
  });
  obj.NW = animalSpeciesByRegion().NW.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpeciesAndSex(specie, option.sex) };
    return specRes;
  });
  obj.SE = animalSpeciesByRegion().SE.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpeciesAndSex(specie, option.sex) };
    return specRes;
  });
  obj.SW = animalSpeciesByRegion().SW.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpeciesAndSex(specie, option.sex) };
    return specRes;
  });
  return obj;
};

const includeNamesSortedWithSex = (option) => {
  const obj = { NE: '' };
  obj.NE = animalSpeciesByRegion().NE.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpeciesBySexSorted(specie, option.sex) };
    return specRes;
  });
  obj.NW = animalSpeciesByRegion().NW.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpeciesBySexSorted(specie, option.sex) };
    return specRes;
  });
  obj.SE = animalSpeciesByRegion().SE.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpeciesBySexSorted(specie, option.sex) };
    return specRes;
  });
  obj.SW = animalSpeciesByRegion().SW.map((specie) => {
    const specRes = { [`${specie}`]: residentsBySpeciesBySexSorted(specie, option.sex) };
    return specRes;
  });
  return obj;
};

const includeNamesSorted = (option) => {
  if (option.sex !== undefined) { return includeNamesSortedWithSex(option); }
  const obj = { NE: '' };
  obj.NE = animalSpeciesByRegion().NE.map((sp) => ({ [`${sp}`]: residentsBySpeciesSorted(sp) }));
  obj.NW = animalSpeciesByRegion().NW.map((sp) => ({ [`${sp}`]: residentsBySpeciesSorted(sp) }));
  obj.SE = animalSpeciesByRegion().SE.map((sp) => ({ [`${sp}`]: residentsBySpeciesSorted(sp) }));
  obj.SW = animalSpeciesByRegion().SW.map((sp) => ({ [`${sp}`]: residentsBySpeciesSorted(sp) }));
  return obj;
};

const includeNames = (option) => {
  if (option.sorted === true) {
    return includeNamesSorted(option);
  } if (option.sex !== undefined) {
    return includeNamesNotSortedWithSex(option);
  } return includeNamesNotSorted();
};

function getAnimalMap(option) {
  if (option !== undefined && option.includeNames === true) {
    return includeNames(option);
  }
  return animalSpeciesByRegion();
}

// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// getAnimalMap({ includeNames: true, sorted: true })

module.exports = getAnimalMap;

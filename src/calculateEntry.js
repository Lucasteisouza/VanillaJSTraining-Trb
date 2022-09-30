const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childArr = entrants.filter((element) => element.age < 18);
  const adultArr = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const seniorArr = entrants.filter((element) => element.age >= 50);
  return { child: childArr.length, adult: adultArr.length, senior: seniorArr.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  } if (entrants.length === 0) {
    return 0;
  } if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const entNumber = countEntrants(entrants);
  return (entNumber.child * 20.99) + (entNumber.adult * 49.99) + (entNumber.senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };

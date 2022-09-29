const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const isReal = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  if (isReal === undefined) {
    return {};
  } return isReal;
}

module.exports = getEmployeeByName;

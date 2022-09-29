const data = require('../data/zoo_data');

function isManager(id) {
  let isManag = false;
  const { employees } = data;
  employees.forEach((element) => {
    const { managers } = element;
    if (managers.some((manager) => manager === id)) {
      isManag = true;
    }
  });
  return isManag;
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (isManager(managerId)) {
    const downManages = [];
    employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        downManages.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return downManages;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

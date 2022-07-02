const service = require('../services/employees.service');

const getEmployees = async (req, res) => {
  const employees = await service.getEmployees();

  res.status(200).json(employees);
};

const createEmployee = async (req, res) => {
  const employee = await service.createEmployee(req.body);

  res.status(200).json({ employee });
};

module.exports = {
  createEmployee,
  getEmployees,
};

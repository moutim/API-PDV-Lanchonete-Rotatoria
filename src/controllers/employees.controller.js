const service = require('../services/employees.service');

const getEmployees = async (req, res) => {
  const employees = await service.getEmployees();

  res.status(200).json(employees);
};

const getEmployee = async (req, res) => {
  const employee = await service.getEmployee(req.params.id);

  res.status(200).json(employee);
};

const createEmployee = async (req, res) => {
  const employee = await service.createEmployee(req.body);

  res.status(201).json(employee);
};

const updateEmployee = async (req, res) => {
  const result = await service.updateEmployee(req.params.id, req.body);

  res.status(201).json(result);
};

const deleteEmployee = async (req, res) => {
  const result = await service.deleteEmployee(req.params.id);

  res.status(201).json(result);
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};

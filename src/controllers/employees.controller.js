const service = require('../services/employees.service');

const createEmployee = async (req, res) => {
  const employee = await service.createEmployee(req.body);

  res.status(200).json({ employee });
};

module.exports = {
  createEmployee,
};

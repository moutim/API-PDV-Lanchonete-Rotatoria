const sinon = require('sinon');
const { expect } = require('chai');
const {
  describe, afterEach, it,
} = require('mocha');
const chai = require('chai');
chai.use(require('chai-as-promised'));
const { Employees } = require('../../src/database/models');
const employeesService = require('../../src/services/employees.service');
const mocksEmployees = require('../mocks/employees.mock');

describe.only('Testa as funcões da camada de services Employees', () => {
  describe('Verifica se a função getEmployees tem os retornos esperados', () => {
    afterEach(() => {
      Employees.findAll.restore();
    });

    it('Retorna um array de objetos com os employees', async () => {
      sinon.stub(Employees, 'findAll').resolves(mocksEmployees.employees);

      const response = await employeesService.getEmployees();

      expect(response).to.be.an('array');
      expect(response[0]).to.be.an('object');
      expect(response).to.deep.equal(mocksEmployees.employees);
    });

    it('Retorna um erro quando não for encontrado employees no banco', async () => {
      sinon.stub(Employees, 'findAll').resolves();

      expect(employeesService.getEmployees()).to.be
        .rejectedWith(Error, JSON.stringify(mocksEmployees.employeesNotFound));
    });
  });

  describe('Verifica se a função getEmployee tem os retornos esperados', () => {
    afterEach(() => {
      Employees.findOne.restore();
    });

    it('Retorna um objeto com os detalhes do employee', async () => {
      sinon.stub(Employees, 'findOne').resolves(mocksEmployees.employee);

      const response = await employeesService.getEmployee();

      expect(response).to.be.an('object');
      expect(response).to.be.equal(mocksEmployees.employee);
    });

    it('Retorna um erro quando não for encontrado o employee no banco', async () => {
      sinon.stub(Employees, 'findOne').resolves();

      expect(employeesService.getEmployee()).to.be
        .rejectedWith(Error, JSON.stringify(mocksEmployees.employeeNotFound));
    });
  });

  describe('Verifica se a função createEmployee tem os retornos esperados', () => {
    afterEach(() => {
      Employees.create.restore();
    });

    it('Retorna um objeto com os detalhes do employee criado', async () => {
      sinon.stub(Employees, 'create').resolves(mocksEmployees.createEmployee);

      const response = await employeesService.createEmployee(mocksEmployees.inputEmployee);
      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(mocksEmployees.createEmployee);
    });

    it('Lança um erro quando não recebe os parametros corretamente', async () => {
      sinon.stub(Employees, 'create').resolves();
      expect(employeesService.createEmployee(mocksEmployees.inputEmployee)).to.be
        .rejectedWith(Error, JSON.stringify(mocksEmployees.employeeNotCreated));
    });
  });

  describe('Verifica se a função updateEmployee tem os retornos esperados', () => {
    afterEach(() => {
      Employees.update.restore();
    });

    it('Retorna um objeto com a mensagem "Informações atualizadas com sucesso."', async () => {
      sinon.stub(Employees, 'update').resolves([true, mocksEmployees.updatedEmployee]);
      sinon.stub(employeesService, 'updateEmployee').resolves(mocksEmployees.updatedEmployee);

      const response = await employeesService.updateEmployee(1, mocksEmployees.inputEmployee);
      expect(response).to.be.an('object');
      expect(response).to.be.deep.equals(mocksEmployees.updatedEmployee);
    });

    it('Lança um erro quando não recebe os parametros corretamente', async () => {
      sinon.stub(Employees, 'update').resolves([false]);

      expect(employeesService.updateEmployee(1, mocksEmployees.inputEmployee)).to.be
        .rejectedWith(Error, JSON.stringify(mocksEmployees.employeeNotUpdated));
    });
  });

  describe('Verifica se a função deleteEmployee tem os retornos esperados', () => {
    afterEach(() => {
      Employees.destroy.restore();
    });

    it('Retorna um objeto com a mensagem "Usuário deletado com sucesso."', async () => {
      sinon.stub(Employees, 'destroy').resolves(true);
      sinon.stub(employeesService, 'deleteEmployee').resolves(mocksEmployees.deletedEmployee);

      const response = await employeesService.deleteEmployee(1);
      expect(response).to.be.an('object');
      expect(response).to.be.deep.equals(mocksEmployees.deletedEmployee);
    });

    it('Lança um erro quando não consegue deletar o usuario', async () => {
      sinon.stub(Employees, 'destroy').resolves(false);

      expect(employeesService.deleteEmployee(1)).to.be
        .rejectedWith(Error, JSON.stringify(mocksEmployees.employeeNotDeleted));
    });
  });
});

const { expect } = require('chai');
const {
  describe, beforeEach, afterEach, it,
} = require('mocha');
const sinon = require('sinon');
const employeesController = require('../../src/controllers/employees.controller');
const employeesService = require('../../src/services/employees.service');
const mocksEmployees = require('../mocks/employees.mock');

describe('Testa as funcões da camada de controller Employees', () => {
  describe('Verifica se a função getEmployees tem os retornos esperados', () => {
    const response = {};
    const request = {};

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(employeesService, 'getEmployees').resolves(mocksEmployees.employees);
    });

    afterEach(() => {
      employeesService.getEmployees.restore();
    });

    it('O status retornado deve ser 200', async () => {
      await employeesController.getEmployees(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

    it('Deve retornar um JSON com todos os employees', async () => {
      await employeesController.getEmployees(request, response);
      expect(response.json.calledWith(mocksEmployees.employees)).to.be.true;
    });
  });

  describe('Verifica se a função getEmployee tem os retornos esperados', () => {
    const response = {};
    const request = { params: { id: 1 } };

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(employeesService, 'getEmployee').resolves(mocksEmployees.employee);
    });

    afterEach(() => {
      employeesService.getEmployee.restore();
    });

    it('O status retornado deve ser 200', async () => {
      await employeesController.getEmployee(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

    it('Deve retornar um JSON com o employee escolhido', async () => {
      await employeesController.getEmployee(request, response);
      expect(response.json.calledWith(mocksEmployees.employee)).to.be.true;
    });
  });

  describe('Verifica se a função createEmployee tem os retornos esperados', () => {
    const response = {};
    const request = {
      body: {
        user: 'novoUsuario',
        password: 'novaSenha',
        levelId: 1,
      },
    };

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(employeesService, 'createEmployee').resolves(mocksEmployees.createdEmployee);
    });

    afterEach(() => {
      employeesService.createEmployee.restore();
    });

    it('O status retornado deve ser 201', async () => {
      await employeesController.createEmployee(request, response);
      expect(response.status.calledWith(201)).to.be.true;
    });

    it('Deve retornar um JSON com as informações do employee criado', async () => {
      await employeesController.createEmployee(request, response);
      expect(response.json.calledWith(mocksEmployees.createdEmployee)).to.be.true;
    });
  });

  describe('Verifica se a função updateEmployee tem os retornos esperados', () => {
    const response = {};
    const request = {
      params: { id: 1 },
      body: {
        user: 'novoUsuario',
        password: 'novaSenha',
        levelId: 1,
      },
    };

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(employeesService, 'updateEmployee').resolves(mocksEmployees.updatedEmployee);
    });

    afterEach(() => {
      employeesService.updateEmployee.restore();
    });

    it('O status retornado deve ser 201', async () => {
      await employeesController.updateEmployee(request, response);
      expect(response.status.calledWith(201)).to.be.true;
    });

    it('Deve retornar um JSON com a mensagem "Informações atualizadas com sucesso."', async () => {
      await employeesController.updateEmployee(request, response);
      expect(response.json.calledWith(mocksEmployees.updatedEmployee)).to.be.true;
    });
  });

  describe('Verifica se a função deleteEmployee tem os retornos esperados', () => {
    const response = {};
    const request = {
      params: { id: 1 },
    };

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(employeesService, 'deleteEmployee').resolves(mocksEmployees.deletedEmployee);
    });

    afterEach(() => {
      employeesService.deleteEmployee.restore();
    });

    it('O status retornado deve ser 200', async () => {
      await employeesController.deleteEmployee(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

    it('Deve retornar um JSON com a mensagem "Usuário deletado com sucesso."', async () => {
      await employeesController.deleteEmployee(request, response);
      expect(response.json.calledWith(mocksEmployees.deletedEmployee)).to.be.true;
    });
  });
});

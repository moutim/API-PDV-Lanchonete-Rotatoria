const { Permissions } = require('../database/models');

const getPermissions = async () => {
  const level = await Permissions.findAll();

  if (!level) {
    throw new Error(JSON.stringify({ status: 404, message: 'Não existem permissões cadastradas no banco.' }));
  }

  return level;
};

const getPermission = async (id) => {
  const level = await Permissions.findOne({ where: { id } });

  if (!level) {
    throw new Error(JSON.stringify({ status: 404, message: 'Permissão não encontrada.' }));
  }

  return level;
};

module.exports = {
  getPermissions,
  getPermission,
};

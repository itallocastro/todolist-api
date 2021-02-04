'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks',
      [
        {
          description: 'tarefa 1',
          value: false,
        },
        {
          description: 'tarefa 2',
          value: true,
        },

      ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};

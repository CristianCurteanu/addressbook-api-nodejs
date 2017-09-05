'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.createTable('user_types', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING
            },
            updatedAt: {
                type: Sequelize.DATE
            },
            createdAt: {
                type: Sequelize.DATE
            }
        });
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.dropTable('user_types');
    }
};
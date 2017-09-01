'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.createTable('clients', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: Sequelize.STRING
            },
            uuid: {
                type: Sequelize.STRING
            },
            key: {
                type: Sequelize.STRING
            },
            updatedAt: {
                type: Sequelize.DATE
            },
            createdAt: {
                type: Sequelize.DATE
            }
        })
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.dropTable('clients');
    }
};
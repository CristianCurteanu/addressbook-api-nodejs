'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: Sequelize.STRING
            },
            passwordDigest: {
                type: Sequelize.STRING
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            middleName: {
                type: Sequelize.STRING
            },
            dateOfBirth: {
                type: Sequelize.DATE
            },
            avatarURL: {
                type: Sequelize.STRING
            },
            userType: {
                type: Sequelize.INTEGER,
                refereces: {
                    model: 'user_types',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
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
        queryInterface.dropTable('users');
    }
};
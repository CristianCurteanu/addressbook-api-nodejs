'use strict';

const db = require('./index');
const Sequelize = require('sequelize');
const UserType = require('./UserType')
const Encryptor = require('../services/encryption')

var User = db.sequelize.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    passwordDigest: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    middleName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hooks: {
        beforeSave: function(user, options) {
            let currentPassword = user.password;
            user.passwordDigest = Encryptor.encodeHash(currentPassword, user.token);
            // if (!user.userType) {
            //     user.userType = UserType.findById(1).id
            // }
        }
    }
})

User.belongsTo(UserType, {
    foreignKey: 'userType'
})

module.exports = User
'use strict';

const db = require('./index');
const Sequelize = require('sequelize');

let Client = db.sequelize.define('clients', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: {
            isUUID: 4
        }
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Client
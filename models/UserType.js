'use strict';

const db = require('./index');
const Sequelize = require('sequelize');
const User = require('./User')

var UserType = db.sequelize.define('user_types', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// UserType.hasMany(User, {
//     foreignKey: 'userType'
// })

module.exports = UserType
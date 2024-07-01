const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Course = sequelize.define('Course', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lecturerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

User.hasMany(Course, { foreignKey: 'lecturerId' });
Course.belongsTo(User, { foreignKey: 'lecturerId' });

module.exports = Course;

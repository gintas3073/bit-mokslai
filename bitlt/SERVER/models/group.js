const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./course');

const Group = sequelize.define('Group', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },
    lecturerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Course.hasMany(Group, { foreignKey: 'courseId' });
Group.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = Group;

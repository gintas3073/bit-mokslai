const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Group = require('./group');

const Lecture = sequelize.define('Lecture', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Group,
            key: 'id'
        }
    }
});

Group.hasMany(Lecture, { foreignKey: 'groupId' });
Lecture.belongsTo(Group, { foreignKey: 'groupId' });

module.exports = Lecture;

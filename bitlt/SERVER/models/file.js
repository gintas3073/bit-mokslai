const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Lecture = require('./lecture');

const File = sequelize.define('File', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lectureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Lecture,
            key: 'id'
        }
    },
    visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

Lecture.hasMany(File, { foreignKey: 'lectureId' });
File.belongsTo(Lecture, { foreignKey: 'lectureId' });

module.exports = File;

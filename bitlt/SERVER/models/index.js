const sequelize = require('../config/db');
const User = require('./user');
const Course = require('./course');
const Group = require('./group');
const Lecture = require('./lecture');
const File = require('./file');

module.exports = {
    User,
    Course,
    Group,
    Lecture,
    File,
    sequelize
};

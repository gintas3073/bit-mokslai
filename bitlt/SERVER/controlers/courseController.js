const { Course } = require('../models');

exports.createCourse = async (req, res) => {
    const { name } = req.body;

    try {
        const newCourse = await Course.create({ name, lecturerId: req.user.id });
        res.json(newCourse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll({ where: { lecturerId: req.user.id } });
        res.json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

const { Group, Course } = require('../models');

exports.createGroup = async (req, res) => {
    const { name, courseId } = req.body;

    try {
        const course = await Course.findOne({ where: { id: courseId, lecturerId: req.user.id } });

        if (!course) {
            return res.status(400).json({ msg: 'Course not found or you are not the lecturer' });
        }

        const newGroup = await Group.create({ name, courseId, lecturerId: req.user.id });
        res.json(newGroup);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getGroups = async (req, res) => {
    try {
        const groups = await Group.findAll({ where: { lecturerId: req.user.id } });
        res.json(groups);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

const { Lecture, Group } = require('../models');

exports.createLecture = async (req, res) => {
    const { name, groupId } = req.body;

    try {
        const group = await Group.findOne({ where: { id: groupId, lecturerId: req.user.id } });

        if (!group) {
            return res.status(400).json({ msg: 'Group not found or you are not the lecturer' });
        }

        const newLecture = await Lecture.create({ name, groupId });
        res.json(newLecture);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getLectures = async (req, res) => {
    const { groupId } = req.params;

    try {
        const lectures = await Lecture.findAll({ where: { groupId } });
        res.json(lectures);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

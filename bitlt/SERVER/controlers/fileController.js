const { File } = require('../models');
const fs = require('fs');
const path = require('path');

exports.uploadFile = async (req, res) => {
    const { lectureId } = req.body;
    const { file } = req;

    try {
        const newFile = await File.create({
            name: file.originalname,
            path: file.path,
            lectureId,
            visible: true
        });
        res.json(newFile);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getFiles = async (req, res) => {
    const { lectureId } = req.params;

    try {
        const files = await File.findAll({ where: { lectureId, visible: true } });
        res.json(files);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

const express = require('express');
const router = express.Router();
const lectureController = require('../controllers/lectureController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, lectureController.createLecture);
router.get('/:groupId', authMiddleware, lectureController.getLectures);

module.exports = router;

const { User } = require('../models');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { attributes: ['firstName', 'lastName', 'email', 'phone'] });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updateProfile = async (req, res) => {
    const { firstName, lastName, email, phone } = req.body;

    try {
        const user = await User.findByPk(req.user.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phone = phone;

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

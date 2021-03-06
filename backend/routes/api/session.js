const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//  L O G I N   V A L I D A T O R
const validateLogin = [
    check('username')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid password.'),
    handleValidationErrors
];


//  L O G   I N
router.post('/', validateLogin, asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.login({ username, password });

    if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    }
    await setTokenCookie(res, user);

    return res.json({ user });
}));


//  L O G   O U T
router.delete('/', (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
});


//  R E S T O R E   S E S S I O N   U S E R
router.get('/', restoreUser, (req, res) => {
    // console.log('THIS IS SESSIONS');
    const { user } = req;
    if (user) {
        return res.json({ user: user.toSafeObject() });
    } else return res.json({});
});

module.exports = router;

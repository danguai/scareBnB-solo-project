const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Place } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//  C R E A T E   P L A C E   V A L I D A T O R
const validateNewPlace = [
    // check('firstName')
    //     .exists({ checkFalsy: true })
    //     .isLength({ min: 4, max: 50 })
    //     .withMessage('First Name should be between 4 and 50 characters long'),
    // check('lastName')
    //     .exists({ checkFalsy: true })
    //     .isLength({ min: 4, max: 50 })
    //     .withMessage('Last Name should be between 4 and 50 characters long'),
    // check('username')
    //     .exists({ checkFalsy: true })
    //     .not()
    //     .isEmail()
    //     .withMessage('Username cannot be an email.')
    //     .isLength({ min: 4, max: 30 })
    //     .withMessage('Please provide a username with at least 4 characters.'),
    // check('email')
    //     .exists({ checkFalsy: true })
    //     .isEmail()
    //     .withMessage('Please provide a valid email.'),
    // check('password')
    //     .exists({ checkFalsy: true })
    //     .isLength({ min: 1 })
    //     .withMessage('Password must be 6 characters or more.'),
    // // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    // // .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    // check('confirmPassword')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Please confirm Password.')
    //     .isLength({ min: 1 })
    //     .withMessage('Password must be 6 characters or more.')
    //     .custom((value, { req }) => {
    //         if (value !== req.body.password) {
    //             throw new Error("Confirm Password doesn't match Password.");
    //         }
    //         return true;
    //     }),
    // handleValidationErrors
];

//  C R E A T E   P L A C E
router.post('/', validateNewPlace, asyncHandler(async (req, res) => {
    const {
        address,
        city,
        state,
        country,
        zipcode,
        price,
        rating
    } = req.body;

    const place = await Place.create(
        {
            address,
            city,
            state,
            country,
            zipcode,
            price,
            rating
        }).catch(e => console.log('backend', e));

    await setTokenCookie(res, place);

    return res.json({ place });
}));

//  R E A D   P L A C E
router.get('/', asyncHandler(async (req, res) => {
    const place = await Place.findAll({
        include: [Favorite, Reviews, Images]
    });

    await setTokenCookie(res, place);

    return res.json({ place });
}));


module.exports = router;

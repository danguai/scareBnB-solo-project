const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Place } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//  C R E A T E   P L A C E   V A L I D A T O R
const validateNewPlace = [
    check('address')
        .exists({ checkFalsy: true })
        .isLength({ max: 255 })
        .withMessage('Address should not be more than 255 characters'),
    check('city')
        .exists({ checkFalsy: true })
        .isLength({ max: 85 })
        .withMessage('City should not be more than 85 characters'),
    check('state')
        .exists({ checkFalsy: true })
        .isLength({ max: 60 })
        .withMessage('State should not be more than 60 characters'),
    check('country')
        .exists({ checkFalsy: true })
        .isLength({ max: 60 })
        .withMessage('Country should not be more than 60 characters'),
    check('zipcode')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 5 })
        .withMessage('It should be a valid zipcode'),
    check('price')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('The Price should include 2 decimals'),
    check('rating')
        .isNumeric({ max: 5 })
        .withMessage('How many stars would you give this place'),
    handleValidationErrors
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

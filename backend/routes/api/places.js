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

//  R E A D   A L L   P L A C E S
router.get('/', asyncHandler(async (_req, res) => {
    console.log(Place);
    const places = await Place.findAll({
        // include: [Favorite, Reviews, Images]
    });

    // await setTokenCookie(res, place);

    return res.json(places);
}));

//  C R E A T E   P L A C E
router.post('/', validateNewPlace, asyncHandler(async (req, res) => {
    const {
        address,
        city,
        state,
        country,
        zipcode,
        price,
        rating,
        userId
    } = req.body;

    const place = await Place.create(
        {
            address,
            city,
            state,
            country,
            zipcode,
            price,
            rating,
            userId
        }).catch(e => console.log('backend', e));

    await setTokenCookie(res, place);
    console.log('palce', place);
    return res.json({ place });
}));


// D E L E T E   P L A C E
router.delete(`/places/:id(\\d+)/delete`, asyncHandler(async (req, res) => {
    const id = req.params.id;
    const place = await Places.findByPk(id);

    await place.destroy();

    res.json({ message: 'Place Deleted' });
}));

module.exports = router;

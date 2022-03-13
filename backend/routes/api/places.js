const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');

const { Place } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//  C R E A T E   P L A C E   V A L I D A T O R
const validateNewPlace = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ max: 255 })
        .withMessage('Title should not be more than 255 characters'),
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
    check('amenities_01')
        .isLength({ max: 100 })
        .withMessage('Amenities should not be more than 100 characters'),
    check('amenities_02')
        .isLength({ max: 100 })
        .withMessage('Amenities should not be more than 100 characters'),
    check('amenities_03')
        .isLength({ max: 100 })
        .withMessage('Amenities should not be more than 100 characters'),
    check('amenities_04')
        .isLength({ max: 100 })
        .withMessage('Amenities should not be more than 100 characters'),
    check('amenities_05')
        .isLength({ max: 100 })
        .withMessage('Amenities should not be more than 100 characters'),
    handleValidationErrors
];

//  C R E A T E   P L A C E
router.post('/', requireAuth, validateNewPlace, asyncHandler(async (req, res) => {
    const {
        title,
        address,
        city,
        state,
        country,
        zipcode,
        url_image_01,
        url_image_02,
        url_image_03,
        url_image_04,
        url_image_05,
        amenities_01,
        amenities_02,
        amenities_03,
        amenities_04,
        amenities_05,
        price,
        rating,
    } = req.body;

    const userId = req.user.id;
    try {

        const place = await Place.create(
            {
                title,
                address,
                city,
                state,
                country,
                zipcode,
                url_image_01,
                url_image_02,
                url_image_03,
                url_image_04,
                url_image_05,
                amenities_01,
                amenities_02,
                amenities_03,
                amenities_04,
                amenities_05,
                price,
                rating,
                userId
            });

        // console.log('PLACEPLACE', place);
        return res.json({ place });
    } catch (e) {
        console.log(e);
    }
}));

//  R E A D   P L A C E
router.get('/:id', asyncHandler(async (req, res) => {
    try {

        const id = +req.params.id;
        const place = await Place.findByPk(id);

        // console.log('ONE PLACE', place);
        return res.json(place);
    } catch (e) {
        console.log('ERROR', e);
    }
}));

//  R E A D   A L L   P L A C E S
router.get('/', asyncHandler(async (req, res) => {
    try {
        const places = await Place.findAll();

        console.log('ALL PLACES', places);
        return res.json(places);
    } catch (e) {
        console.log(e);
    }
}));

// U P D A T E   P L A C E
router.put('/:id', requireAuth, validateNewPlace, asyncHandler(async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    await Place.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
    });

    const place = await Place.findByPk(id);

    return res.json(place);
}));

// D E L E T E   P L A C E
router.delete('/:id', asyncHandler(async (req, res) => {
    const place = await Place.findByPk(req.params.id);
    if (!place) throw new Error('Cannot find item');

    await Place.destroy({ where: { id: place.id } });

    return res.json({ id: place.id });
}));

module.exports = router;

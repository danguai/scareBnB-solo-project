const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');

const { Review } = require('../../db/models');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//  C R E A T E   R E V I E W   V A L I D A T O R

//  C R E A T E   R E V I E W
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const {
        title,
        review
    } = req.body;

    const userId = req.user.id;
    const placeId = req.place.id;
    try {

        const reviewObj = await Review.create(
            {
                title,
                review,
                userId,
                placeId
            });

        return res.json({ reviewObj });
    } catch (e) {
        console.log(e);
    }
}));

//  R E A D   A L L   R E V I E W S
router.get('/', asyncHandler(async (req, res) => {
    try {

        const reviews = await Review.findAll();

        return res.json(reviews);
    } catch (e) {
        console.log(e);
    }
}));

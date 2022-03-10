const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');

const { Place } = require('../../db/models');

const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//  C R E A T E   R E V I E W   V A L I D A T O R

//  C R E A T E   P L A C E
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const {
        review
    } = req.body;

    const userId = req.user.id;
    const placeId = req.place.id;
    try {

        const review = await Review.create(
            {
                review,
                userId,
                placeId
            });

        return res.json({ place });
    } catch (e) {
        console.log(e);
    }
}));

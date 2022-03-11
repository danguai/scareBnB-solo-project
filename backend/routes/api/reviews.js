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
        message,
        score,
        placeId
    } = req.body;

    const userId = req.user.id;

    try {
        const review = await Review.create({
            title,
            message,
            score,
            userId,
            placeId
        });

        return res.json({ review });
    } catch (e) {
        console.log(e);
    }
}));

//  R E A D   R E V I E W S
router.get('/', asyncHandler(async (req, res) => {
    try {
        const reviews = await Review.findAll();
        return res.json(reviews);
    } catch (e) {
        console.log(e);
    }
}));

// U P D A T E   R E V I E W
router.put('/:reviewId', requireAuth, asyncHandler(async (req, res) => {
    const id = req.params.reviewId;

    delete req.body.id;
    const [_updateCount, review] = await Review.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
    });

    // const review = await Review.findByPk(id);

    return res.json(review);
}));

// D E L E T E   R E V I E W
router.delete('/:reviewId', asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId);

    if (!review) throw new Error('Cannot find item');

    await Review.destroy({ where: { id: review.id } });

    return res.json({ id: review.id });
}));

module.exports = router;

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

//  R E A D   R E V I E W
router.get('/:id', asyncHandler(async (req, res) => {
    try {
        const id = +req.params.id;
        const review = await Review.findByPk(id);

        return res.json(review);
    } catch (e) {
        console.log('ERROR', e);
    }
}));

// U P D A T E   R E V I E W
router.put('/:id', requireAuth, asyncHandler(async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    await Review.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
    });

    const review = await Review.findByPk(id);

    return res.json(review);
}));

// D E L E T E   R E V I E W
router.delete('/:id', asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id);
    if (!review) throw new Error('Cannot find item');

    await Review.destroy({ where: { id: review.id } });

    return res.json({ id: review.id });
}));

module.exports = router;

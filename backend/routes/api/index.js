const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const placesRouter = require('./places.js');
const reviewsRouter = require('./reviews.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/places', placesRouter);

router.use('/places/:placeId/reviews', reviewsRouter);

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');

const { User } = require('../../db/models');

router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition' // FIX THIS
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}));

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');

router.get('/restore-user', restoreUser, (req, res) => {
    return res.json(req.user);
});

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');

router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user);
});



module.exports = router;


const router = require('express').Router();

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');



router.use('/auth', authRouter);
router.use('/jokes', authenticate, jokesRouter);

router.get('/', (req, res) => {
  res.json({api: 'API is live'})
});

module.exports = router;

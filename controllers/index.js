const router = require('express').Router();

const apiRoutes = require('./api');
const websiteRoutes = require('./website');

router.use('/api', apiRoutes);
router.use('/', websiteRoutes);

module.exports = router;

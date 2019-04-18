// import the express router
const router = require('express').Router();

// GET / route
router.get('/', (req, res) => {
  res.json({ derp: true });
});

// export the route from this file
module.exports = router;

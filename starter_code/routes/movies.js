const express = require('express');
const router  = express.Router();

/* GET movies page */
router.post('/movies', (req, res, next) => {
  res.render('movies');
});

module.exports = router;

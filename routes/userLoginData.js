const express = require('express');
const router = express.Router();
const userLoginData = require('../services/userLoginData');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await userLoginData.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error get user login data `, err.message);
    next(err);
  }
});

module.exports = router;
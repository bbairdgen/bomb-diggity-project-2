const router = require("express").Router();
const { Autocorrect, User, Total } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    return res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const totalData = await Total.findAll();
    return res.json(totalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const autocorrectData = await Autocorrect.findAll();
    return res.json(autocorrectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

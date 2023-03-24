//to do
const router = require("express").Router();
const { Autocorrect } = require("../../models");
const withAuth = require("../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newAutocorrect = await Autocorrect.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newAutocorrect);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

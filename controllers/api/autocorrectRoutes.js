//to do
const router = require("express").Router();
const { Autocorrect } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const autocorrectData = await Autocorrect.findAll();
    return res.json(autocorrectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const autocorrectData = await Autocorrect.findByPk(req.params.id);
    const autocorrect = autocorrectData.get({ plain: true });
    return res.json(autocorrect);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

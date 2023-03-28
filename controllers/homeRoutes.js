const router = require("express").Router();
const { Autocorrect, User, Total } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const autocorrectData = await Autocorrect.findAll({});
    const autocorrects = autocorrectData.map((auto) =>
      auto.get({ plain: true })
    );
    res.render("homepage", {
      logged_in: req.session.logged_in,
      autocorrects,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Autocorrect }, { model: Total }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;

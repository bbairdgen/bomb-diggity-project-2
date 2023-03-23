// TODO: CREATE GET AND POST ROUTES
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const autocorrectRoutes = require("./autocorrectRoutes");
const totalRoutes = require("./totalRoutes");

router.use("/users", userRoutes);
router.use("/autocorrects", autocorrectRoutes);
router.use("/totals", totalRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

router.post("/", auth, role("recruiter"), (req, res) => {
  res.json({
    message: "Job created successfully"
  });
});

module.exports = router;

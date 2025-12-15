const express = require("express");
const router = express.Router();
const { validateTransition } = require("../services/applicationState.service");

router.post("/change-stage", (req, res) => {
  const { fromStage, toStage } = req.body;

  try {
    validateTransition(fromStage, toStage);
    res.json({
      message: "Application stage updated successfully",
      fromStage,
      toStage
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;

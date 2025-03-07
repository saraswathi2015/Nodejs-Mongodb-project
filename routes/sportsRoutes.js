const express = require("express");
const sportsController = require("./../controllers/sportsController");

const router = express.Router();

router
  .route("/")
  .get(sportsController.getAllSports)
  .post(sportsController.createSport);

router
  .route("/:id")
  .get(sportsController.getSport)
  .patch(sportsController.updateSport)
  .delete(sportsController.deleteSport);

module.exports = router;

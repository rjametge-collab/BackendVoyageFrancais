const express = require("express");
const { destinationUpload } = require("../middleware/upload");

const router = express.Router();

const {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
} = require("../controllers/destinationController");

// GET all
router.get("/", getDestinations);

// GET one
router.get("/:id", getDestinationById);

// CREATE
router.post("/", destinationUpload.single("image"), createDestination);

// UPDATE
router.put("/:id", destinationUpload.single("image"), updateDestination);

// DELETE
router.delete("/:id", deleteDestination);

module.exports = router;
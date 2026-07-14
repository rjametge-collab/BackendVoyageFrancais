const Destination = require("../models/Destination");

const toImageUrl = (imagePath, req) => {
  if (!imagePath) {
    return "";
  }

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  if (imagePath.startsWith("/Images/")) {
    const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
    return `${clientUrl}${imagePath}`;
  }

  const baseUrl = `${req.protocol}://${req.get("host")}`;

  if (imagePath.startsWith("/uploads/")) {
    return `${baseUrl}${imagePath}`;
  }

  return `${baseUrl}/uploads/destinations/${imagePath}`;
};

const serializeDestination = (destinationDoc, req) => {
  const destination = destinationDoc.toObject();
  destination.image = toImageUrl(destination.image, req);
  return destination;
};

// GET all destinations
const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations.map((item) => serializeDestination(item, req)));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET one destination
const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.status(200).json(serializeDestination(destination, req));

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE destination
const createDestination = async (req, res) => {
  try {
    const payload = {
      ...req.body,
      image: req.file
        ? `/uploads/destinations/${req.file.filename}`
        : req.body.image,
    };

    const destination = await Destination.create(payload);

    res.status(201).json(serializeDestination(destination, req));

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE destination
const updateDestination = async (req, res) => {
  try {

    const payload = {
      ...req.body,
    };

    if (req.file) {
      payload.image = `/uploads/destinations/${req.file.filename}`;
    }

    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      payload,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.status(200).json(serializeDestination(destination, req));

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE destination
const deleteDestination = async (req, res) => {
  try {

    const destination = await Destination.findByIdAndDelete(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.status(200).json({
      message: "Destination deleted successfully",
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
};
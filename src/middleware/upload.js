const fs = require("fs");
const path = require("path");
const multer = require("multer");

const destinationUploadDir = path.join(
  __dirname,
  "..",
  "..",
  "uploads",
  "destinations"
);

fs.mkdirSync(destinationUploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, destinationUploadDir);
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname) || ".jpg";
    const baseName = path
      .basename(file.originalname, extension)
      .replace(/[^a-zA-Z0-9-_]/g, "-")
      .toLowerCase();
    cb(null, `${Date.now()}-${baseName}${extension}`);
  },
});

const imageFileFilter = (req, file, cb) => {
  if (file.mimetype && file.mimetype.startsWith("image/")) {
    cb(null, true);
    return;
  }

  cb(new Error("Only image uploads are allowed."));
};

const destinationUpload = multer({
  storage,
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = {
  destinationUpload,
};

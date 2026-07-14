const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },


    completedLessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson"
      }
    ],


    savedTrips: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip"
      }
    ]

  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("User", userSchema);
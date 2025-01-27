const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Schema Definition
const movieSchema = new mongoose.Schema({
  id: String,
  title: String,
  genre: String,
  year: Number,
  rating: Number,
  imageUrl: String, // Corrected from "iamgeUrl"
});

// Model Definition
const Movie = mongoose.model("movies2025", movieSchema);

// Route to Fetch All Movies
app.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => res.send(movies))
    .catch((err) => res.status(500).send("Error fetching movies: " + err.message));
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

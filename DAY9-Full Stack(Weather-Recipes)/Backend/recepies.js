const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
const port = 4000;

// Endpoint to fetch recipes data from Dummy JSON API
app.get("/recipes", async (req, res) => {
  try {
    // Fetch data from DummyJSON API
    const response = await axios.get("https://dummyjson.com/recipes");
    res.json(response.data); // Send the data back to the frontend
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).send("Error fetching recipes");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// If the current environment is not production
if (process.env.NODE_ENV !== "production") {
  // Load environment variables from a .env file into process.env
  require("dotenv").config();
}

// Import the express module
const express = require("express");
const connectToDb = require("./config/connectToDb");

// Create a new express application
const app = express();

// Connect to the database
connectToDb();
// Define a GET route on the path "/api"
app.get("/api", (req, res) => {
  // Send a JSON response with a message
  res.json({ message: "Hello from server!" });
});

// Start the server on the port defined in the environment variables
app.listen(process.env.PORT);

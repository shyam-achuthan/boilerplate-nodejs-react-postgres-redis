const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { redisClient } = require("./config/redis");
const db = require("./models");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes (will add these later)
// app.use('/api/v1/resource', require('./routes/resourceRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An error occurred",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

module.exports = app;

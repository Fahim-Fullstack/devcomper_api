const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
//const logger = require("./middleware/logger");
const PORT = process.env.PORT || 5000;

// Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

// Route Files
const bootcamps = require("./routes/bootcamps");
const app = express();

// Dev logging middleware
//app.use(logger);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV}  mode on port ${PORT}`)
);

// Handle unhandled rejections

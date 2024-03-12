const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.json());

app.use(userRoutes);

// Unsupported Route
app.use((req, res, next) => {
  const error = {};
  error.code = 404;
  error.message = `Path ${req.path} not found.`;
  next(error);
});

// Error Handling middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return;
  }
  res.statusCode = error.code || 500;
  res.json({
    success: false,
    message: error.message || "Something went wrong!",
  });
});

app.listen(3000);

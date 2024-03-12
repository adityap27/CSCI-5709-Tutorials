const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users");

const userRoutes = express.Router();

// Get all users
userRoutes.get("/users", usersControllers.getUsers);

// Get specific user
userRoutes.get("/user/:id", usersControllers.getUser);

// Add user
userRoutes.post(
  "/add",
  check("email")
    .notEmpty()
    .withMessage("Email is a mandatory field.")
    .isString()
    .withMessage("Email should be a string.")
    .isEmail()
    .withMessage("Email has an invalid format."),
  check("firstName")
    .notEmpty()
    .withMessage("First name is a mandatory field.")
    .isString()
    .withMessage("First name should be a string.")
    .isAlpha()
    .withMessage("First name can only have alphabets."),
  usersControllers.addUser
);

// Update user
userRoutes.put(
  "/update/:id",
  check("email").optional().isString().isEmail().withMessage("Email has an invalid format."),
  check("firstName").optional().isString().isAlpha().withMessage("First name can only have alphabets."),
  usersControllers.updateUser
);

module.exports = userRoutes;

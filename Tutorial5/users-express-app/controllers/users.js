const uuid = require("uuid");
const { validationResult } = require("express-validator");

DUMMY_USERS = [
  {
    email: "abc@abc.ca",
    firstName: "ABC",
    id: "5abf6783",
  },
  {
    email: "xyz@xyz.ca",
    firstName: "XYZ",
    id: "5abf674563",
  },
];

const getUsers = (req, res, next) => {
  successResponse = {
    message: "Users retrieved",
    success: true,
    users: DUMMY_USERS,
  };

  res.json(successResponse);
};

const getUser = (req, res, next) => {
  // Find the user
  const user = DUMMY_USERS.find((user) => user.id === req.params.id);

  if (!user) {
    const error = new Error(`No user found with id: ${req.params.id}`);
    error.code = 404;
    return next(error);
  }

  successResponse = {
    success: true,
    user: user,
  };

  res.json(successResponse);
};

const addUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = {};
    error.code = 422;
    error.message = errors.array()[0].msg;
    return next(error);
  }

  let newId = uuid.v4().split("-")[0];
  while (DUMMY_USERS.find((user) => user.id === newId)) {
    newId = uuid.v4().split("-")[0];
  }

  req.body.id = newId;
  DUMMY_USERS.push(req.body);

  successResponse = {
    message: "User added",
    success: true,
  };

  res.statusCode = 201;
  res.json(successResponse);
};

const updateUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = {};
    error.code = 422;
    error.message = errors.array()[0].msg;
    return next(error);
  }

  if (!req.body.email && !req.body.firstName) {
    const error = new Error("");
    error.code = 422;
    error.message =
      "At least one of the fields (email or firstName) should be present";
    return next(error);
  }
  // Find the user
  const user = DUMMY_USERS.find((user) => user.id === req.params.id);

  if (!user) {
    const error = new Error(`No user found with id: ${req.params.id}`);
    error.code = 404;
    return next(error);
  }

  user.firstName = req.body.firstName;
  user.email = req.body.email;

  successResponse = {
    success: true,
    message: "User updated",
  };

  res.json(successResponse);
};

module.exports.addUser = addUser;
module.exports.updateUser = updateUser;
module.exports.getUser = getUser;
module.exports.getUsers = getUsers;

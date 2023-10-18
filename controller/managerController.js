const bcrypt = require("bcrypt");
const db = require("../models/index");
const Manager = db.manager;
const jwt = require("jsonwebtoken");
const catchAsync = require("../api_features/catchAsync");

exports.register = catchAsync(async (req, res, next) => {
  const { email, name, phone, gender, password } = req.body;
  // Check if the email exists
  const userExists = await Manager.findOne({
    where: { email },
  });
  if (userExists) {
    return res.status(400).send("Email is already associated with an account");
  }

  await Manager.create({
    email,
    name,
    phone,
    gender,
    password: await bcrypt.hash(password, 15),
  });
  return res.status(200).send("Registration successful");
});

exports.signIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Manager.findOne({
    where: { email },
  });
  if (!user) {
    return res.status(404).json("Name not found");
  }

  // Verify password
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(404).json("Incorrect email and password combination");
  }

  // Authenticate user with jwt
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(200).send({
    manager_id: user.manager_id,
    name: user.name,
    email: user.email,
    accessToken: token,
  });
});

exports.employees = catchAsync(async (req, res, next) => {
  await Waitstaff.findAll().then((data) => {
    res.status(200).json({
      status: "success",
      data,
    });
  });
});

// REGISTER DAN LOGIN

const { user } = require("../models");
const authService = require("../services/authService");

const register = async (req, res, next) => {
  try {
    const data = await authService.register(req.body);

    res.status(201).json({
      status: "success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const accessToken = await authService.login(req.body);

    res.status(201).json({
      status: "success",
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };

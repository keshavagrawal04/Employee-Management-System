const { userService } = require("../services");
const { responseMessages } = require("../configs");
const { crypto, jwt, email } = require("../utils");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user)
      return res
        .status(404)
        .json({ status: 404, message: responseMessages.USER_NOT_FOUND });
    const isPasswordValid = await crypto.isHashValid(
      password,
      user.password.salt,
      user.password.hash
    );
    if (!isPasswordValid)
      return res
        .status(400)
        .json({ status: 400, message: responseMessages.PASSWORD_MISMATCH });
    const tokens = await jwt.generateTokens({
      userId: user._id,
      email: user.email,
      role: user.role,
      isVerify: user.isVerify,
    });
    res.status(200).json({
      status: 200,
      message: responseMessages.LOGIN_SUCCESS,
      userId: user._id,
      email: user.email,
      role: user.role,
      isVerify: user.isVerify,
      tokens,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 500,
      message: responseMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

const register = async (req, res) => {
  try {
    let user = await userService.findUserByEmail(req.body.email);
    if (user)
      return res
        .status(400)
        .json({ status: 400, message: responseMessages.USER_ALREADY_EXISTS });
    const password = await crypto.generateHash(req.body.password);
    req.body.password = password;
    user = await userService.saveUser(req.body);
    res.status(201).json({
      status: 201,
      message: responseMessages.USER_REGISTRATION_SUCCESS,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 500,
      message: responseMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

const verifyInviteToken = async (req, res) => {
  try {
    const { token } = req.query;
    console.log(token);
    const payload = await jwt.verifyInviteToken(token);
    if (!payload)
      return res.status(201).json({
        status: 401,
        message: "Unauthorized User",
      });

    res.status(201).json({
      status: 201,
      message: "Authorized User",
      user: payload,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: responseMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.findUsers();
    res.status(200).json({
      status: 200,
      message: responseMessages.USERS_RETRIEVED_SUCCESS,
      users,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 500,
      message: responseMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

const inviteEmployee = async (req, res) => {
  try {
    const { email: userEmail } = req.body;
    const inviteToken = await jwt.generateInviteToken(req.body);
    const inviteUrl = `${process.env.CLIENT_URL}/${inviteToken}`;
    // const response = await email.sendInvite(userEmail, inviteUrl);
    // console.log(response);
    res
      .status(200)
      .json({ message: "Email sended successfully", token: inviteToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 500,
      message: responseMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.findUserById(req.params.id);
    if (!user)
      return res
        .status(404)
        .json({ status: 404, message: responseMessages.USER_NOT_FOUND });
    res
      .status(200)
      .json({ status: 200, message: responseMessages.USER_RETRIEVED_SUCCESS });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 500,
      message: responseMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  login,
  register,
  getUsers,
  getUser,
  inviteEmployee,
  verifyInviteToken,
};

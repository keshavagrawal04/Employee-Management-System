const { User } = require("../models");

const saveUser = async (payload) => {
  try {
    let user = await User(payload);
    user = user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserById = async (id) => {
  try {
    const user = await User.findById({ _id: id });
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    throw error;
  }
};

const findUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = { findUserById, findUserByEmail, findUsers, saveUser };

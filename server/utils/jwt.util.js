const JWT = require("jsonwebtoken");

const generateTokens = async (payload) => {
  const {
    ACCESS_SECRET_KEY,
    REFRESH_SECRET_KEY,
    REFRESH_EXPIRY,
    ACCESS_EXPIRY,
  } = process.env;

  try {
    const accessToken = await JWT.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: ACCESS_EXPIRY,
    });
    const refreshToken = await JWT.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: REFRESH_EXPIRY,
    });
    return (tokens = { access: accessToken, refresh: refreshToken });
  } catch (error) {
    throw error;
  }
};

const generateInviteToken = async (payload) => {
  try {
    const { INVITE_SECRET_KEY, INVITE_EXPIRY } = process.env;
    const inviteToken = await JWT.sign(payload, INVITE_SECRET_KEY, {
      expiresIn: INVITE_EXPIRY,
    });
    return inviteToken;
  } catch (error) {
    throw error;
  }
};

const verifyInviteToken = async (token) => {
  try {
    const { INVITE_SECRET_KEY } = process.env;
    const payload = JWT.verify(token, INVITE_SECRET_KEY);
    console.log(payload);
    return payload;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  generateTokens,
  generateInviteToken,
  verifyInviteToken,
};

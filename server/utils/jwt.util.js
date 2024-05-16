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

module.exports = {
  generateTokens,
};

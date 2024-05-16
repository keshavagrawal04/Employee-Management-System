const crypto = require("crypto");

const generateHash = (
  password,
  salt = crypto.randomBytes(32).toString("hex")
) => {
  try {
    const hash = crypto
      .pbkdf2Sync(password, salt, 100, 64, "sha256")
      .toString("hex");
    return { hash, salt };
  } catch (error) {
    throw error;
  }
};

const isHashValid = async (password, salt, hash) => {
  try {
    const { hash: generatedHash } = await generateHash(password, salt);
    return hash === generatedHash;
  } catch (error) {
    throw error;
  }
};

// const generateRandomPassword = async () => {
//   try {
//     const password = await
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = { generateHash, isHashValid };

const mongoose = require("mongoose");

const connect = async () => {
  const { MONGO_DB_URI, DB_NAME } = process.env;

  try {
    const { connection } = await mongoose.connect(`${MONGO_DB_URI}/${DB_NAME}`);
    console.log(`✅ Database Connection Success : ${connection.host}`);
  } catch (error) {
    console.log(`❌ Database Connection Failed : ${error.message}`);
  }
};

module.exports = { connect };

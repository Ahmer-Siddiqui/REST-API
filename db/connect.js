const mongoose = require("mongoose");
const { MongoURI } = process.env;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoURI);
    console.log(`Database is Connected...`);
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
};

module.exports = connectDB;

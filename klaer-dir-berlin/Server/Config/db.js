const mongoose = require("mongoose");
const User = require("../Models/user");
const Location = require("../Models/location")

const connectDb = async () => {
  try {
    await mongoose.connect(
        'mongodb://127.0.0.1:27017/DB_Beleg3'

    );
    console.log("Mongodb Successfully Connected!");
    const users = [{username:"admina", password:"password", isAdmin:true, name:"admina"},
                {username:"guest", password:"password", isAdmin:false, name:"guest"}];
    await User.insertMany(users);
    console.log("succes insert")
    await Location.insertMany(locations);
} catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
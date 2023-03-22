const User = require("../Models/user.js");
const Location = require("../Models/location.js");


class UserController {
  

  static async login(req, res, next) {
    try {
      // cari user yang akan login
      const foundUser = await User.findOne({ username: req.body.username }).exec();

      // jika ketemu, compare passwordnya
      if (foundUser && req.body.password === foundUser.password) {
        if(foundUser.username==="admina"){
          return res.status(200).json({
            message: "Welcome Admina!",
            status: "admina",
          });
        }
        else if (foundUser.username==="guest"){
          return res.status(200).json({
            message: "Welcome Guest!",
            status: "guest",
          });
        }
      
      } else {
        throw {
          status: 401,
          message: "Invalid Username or Password",
        };
      }
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Invalid Username or Password",
            status: "error",
            stack:error
          });
    }
  }

  static async insertLocation(req, res, next) {
    try {
        const createdLocation = await Location.create(req.body);
        return res.status(201).json({
            message: "success create location",
            status: "success",
            data: createdLocation
          }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "internal server error",
            status: "error",
            stack:error
          });
    }
  }

  static async getAllLocation(req, res, next){
    const filter = {};
    try {
      const all = await Location.find(filter);
      res.status(200).json({
        message: "success get location",
        status: "success",
        data: all
      });
    } catch (error) {
      return res.status(500).json({
        message: "internal server error",
        status: "error",
        stack:error
      });
    }

  }

  static async getLocationByID(req, res, next){
    const id = req.params.id;
    try {
      const location = await Location.findById(id);
      if(location.length!==0){
        return res.status(200).json({
          message: "success get location",
          status: "success",
          data: location
        });
      } else {
        throw {
          status: 400,
          message: "Location Not Found!",
        };
      }
      
    } catch (error) {
      return res.status(500).json({
        message: "internal server error",
        status: "error",
        stack:error
      });
    }
  }

  static async editLocationByID(req, res, next){
    const id = req.params.id;
    const filter = {_id:id};
    const update = req.body;
    try {
      const location = await Location.findById(id);
      if(location.length!==0){
        let updatedLocation = await Location.findOneAndUpdate(filter, update, {
          new: true
        });
        return res.status(204).json()
      } else {
        throw {
          status: 400,
          message: "Location Not Found!",
        };
      }
    } catch (error) {
      
    }
  }

  static async deleteLocationByID(req, res, next){
    const id = req.params.id;
    const filter = {_id:id};
    try {
      const location = await Location.findById(id);
      if(location.length!==0){
        const deleted = await Location.deleteOne(filter);
        res.status(204).json()
      } else {
          throw {
            status: 400,
            message: "Location Not Found!",
        };
      }
    } catch (error) {
        return res.status(500).json({
        message: "internal server error",
        status: "error",
        stack:error
      });
    }
  }

}

module.exports = UserController;
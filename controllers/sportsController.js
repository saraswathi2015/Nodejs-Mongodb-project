const express = require("express");
const Sports = require("../Modules/sportsModules");

exports.getAllSports =
  ("/api/v1/sports",
  async (req, res) => {
    const data = await Sports.find();
    res.status(200).json(data);
  });

exports.getSport = (req, res) => {};

// exports.createSport = async (req, res) => {
//   try {
//     console.log(req.body);
//     const newUser = new Sports(req.body);
//     const { name } = newUser;
//     console.log(newUser);
//     const userExist = await Sports.findOne({ name });
//     if (userExist) {
//       return res.status(400).json({ message: "user already exist" });
//     }
//     const saveData = await newUser.save();
//     res.status(200).json({
//       status: "success",
//       data: {
//         saveData,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ errorMessage: error.message });
//   }
// };

exports.createSport = async (req, res) => {
  try {
    console.log(req.body);
    const sport = await Sports.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        sport: sport,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// (or) // Sports.create({}).then((coll) => {
//     console.log(coll)
// }).catch((error) => {
//     console.log(error)
// })

exports.updateSport = (req, res) => {};

exports.deleteSport = (req, res) => {};

const fs = require("fs");
const Movie = require("../models/models");
const connection = require("../db/connection")
const mongoose = require("mongoose");

const addMovie = async (movieObj) => {
  try {
      const newMovie = new Movie(movieObj);
      await newMovie.save();
      console.log("New movie: ", newMovie)
  } catch (error) {
    console.log(error);
  }
};

const listMovies = () => {
  try {
   let list = Movie.find({}).then(data => console.log(data))
   console.log(list)
  
    
  } catch (error) {
    console.log(error);
  }
};

const updateMovies = async () => {
  try {
    let update = Movie.updateOne({title: process.argv[4]}, {actor: process.argv[6]}).then(res => console.log(`${process.argv[4]} has been updated.`));
  } catch (error) {
    console.log(error);
  }
};

const deleteMovies = async () => {
  try {
    let remove = Movie.deleteOne({title: process.argv[4]}).then(msg => console.log(`${process.argv[4]} has been deleted.`));
    console.log(remove)
  } catch (error) {
    console.log(error);
  }
};

const searchMovies = () => {
  try {
    movieArr = JSON.parse(fs.readFileSync("./storage.json"));
    objIndex = movieArr.findIndex((obj) => obj.id == process.argv[4]);
    console.log(movieArr[process.argv[4]]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  listMovies,
  updateMovies,
  deleteMovies,
  searchMovies,
};

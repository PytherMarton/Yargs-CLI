const fs = require("fs");
const { Db } = require("mongodb");
const { argv } = require("process");
const connection = require("../db/connection");

const addMovie = async (collection, movieObj) => {
  try {
      await collection.insertOne(movieObj)
      console.log(`Successfully added ${movieObj.title}.`)
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async (collection, movieObj) => {
  try {
    const result = await collection.find(movieObj).toArray()
    console.log(result)
    
  } catch (error) {
    console.log(error);
  }
};

const updateMovies = async (collection, movieObj) => {
  try {
    await collection.updateOne({title: "Movie1"}, {$set: {actor: "Actor99"}})
  } catch (error) {
    console.log(error);
  }
};

const deleteMovies = async (collection, movieObj) => {
  try {
    await collection.deleteOne(movieObj)
    console.log(`${movieObj.title} has ben deleted.`)
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

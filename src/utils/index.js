const fs = require("fs");
const { argv } = require("process");

const addMovie = (movieArr, movieObj) => {
  try {
    movieArr = JSON.parse(fs.readFileSync("./storage.json"));
    movieArr.push(movieObj);
    let i = 0;
    movieArr.map((n) => {
      n["id"] = i;
      i++;
    });
    const stringyObj = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", stringyObj);
    console.log("New item has been added to the list.");
  } catch (error) {
    console.log(error);
  }
};

const listMovies = () => {
  try {
    if (process.argv[2] === "list") {
      movieArr = JSON.parse(fs.readFileSync("./storage.json"));
      console.log(movieArr);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateMovies = () => {
  try {
    if (process.argv[2] === "update") {
      movieArr = JSON.parse(fs.readFileSync("./storage.json"));
      console.log(movieArr);
      objIndex = movieArr.findIndex((obj) => obj.id == process.argv[4]);
      console.log("Before update: ", movieArr[objIndex]);
      movieArr[objIndex].title = process.argv[6];
      movieArr[objIndex].actor = process.argv[8];
      console.log("After update: ", movieArr[objIndex]);
      const stringyObj = JSON.stringify(movieArr);
      fs.writeFileSync("./storage.json", stringyObj);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteMovies = () => {
  try {
    movieArr = JSON.parse(fs.readFileSync("./storage.json"));
    movieArr.splice(process.argv[4], 1);
    const stringyObj = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", stringyObj);
    console.log(`Item with the id ${process.argv[4]} it's been deleted.`);
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

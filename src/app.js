const yargs = require("yargs");
const fs = require("fs");
const {
  addMovie,
  listMovies,
  updateMovies,
  deleteMovies,
  searchMovies,
} = require("./utils/index");

const app = () => {
  try {
    let movieArr;
    try {
      movieArr = JSON.parse(fs.readFileSync("./storage.json"));
    } catch (error) {
      movieArr = [];
    }

    try {
      if (process.argv[2] === "add") {
        addMovie(movieArr, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
        });
      } else if (process.argv[2] === "list") {
        listMovies();
      } else if (process.argv[2] === "update") {
        updateMovies();
      } else if (process.argv[2] === "delete") {
        deleteMovies();
      } else if (process.argv[2] === "search") {
        searchMovies();
      }
    } catch (error) {}
  } catch (error) {
    console.log(error);
  }
};

app();

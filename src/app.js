const yargs = require("yargs");
const fs = require("fs");
const {
  addMovie,
  listMovies,
  updateMovies,
  deleteMovies,
  searchMovies,
} = require("./utils/index");
const connection = require("./db/connection");
const command = process.argv[2];

const app = async (args) => {
    try {
        if (command === "add") {
            const movieObj = {title: args.title, actor: args.actor}
            await connection(addMovie, movieObj);
        } else if (command === "update") {
            await connection(updateMovies);
        } else if (command === "list") {
           await connection(listMovies);
        } else if (command === "delete") {
            const movieObj = {title: args.title, actor: args.actor}
            await connection(deleteMovies, movieObj);
        }

    } catch (error) {}

};

app(yargs.argv);

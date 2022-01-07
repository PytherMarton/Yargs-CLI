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
const command = yargs.argv._[0];


const app = async (args) => {
    try {
        if (command === "add") {
           await addMovie({title: args.title, actor: args.actor});
        } else if (command === "update") {
            await updateMovies();
        } else if (command === "list") {
           await listMovies();
        } else if (command === "delete") {
            await deleteMovies();
        }

    } catch (error) {}

};

app(yargs.argv);

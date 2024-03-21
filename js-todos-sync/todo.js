"use strict";

const [argv, task] = process.argv.slice(2);
const Controller = require("./controllers/index");

switch (argv) {
  case "":
    Controller.help();
    break;
  case "help":
    Controller.help();
    break;
  case "list":
    Controller.list();
    break;
  case "add":
    Controller.add(task);
    break;
  case "findById":
    Controller.findById(task);
    break;
  case "delete":
    Controller.delete(task);
    break;
  case "complete":
    Controller.complete(task);
    break;
  case "uncomplete":
    Controller.uncomplete(task);
    break;
}

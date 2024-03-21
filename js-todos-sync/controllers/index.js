"use strict";

const View = require("../views/index");
const Model = require("../models/index");

class Controller {
  static help() {
    View.displayHelp();
  }

  static list() {
    const datas = Model.readData();
    View.displayData(datas);
  }

  static add(task) {
    const addData = Model.addData(task);
    View.displayAddData(addData);
  }

  static findById(id) {
    const data = Model.findById(id);
    View.displayFindData(data);
  }

  static delete(id) {
    const data = Model.delete(id);
    View.deletedData(data);
  }

  static delete(id) {
    const data = Model.delete(id);
    View.deletedData(data);
  }

  static complete(id) {
    const data = Model.complete(id);
    View.complete(data);
  }

  static uncomplete(id) {
    const data = Model.uncomplete(id);
    View.uncomplete(data);
  }
}

module.exports = Controller;

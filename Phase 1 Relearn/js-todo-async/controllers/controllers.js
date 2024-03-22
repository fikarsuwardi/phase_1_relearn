"use strict";

const View = require("../views/views.js");
const Model = require("../models/models.js");

class Controller {
  static help() {
    View.help();
  }

  static list() {
    let getData = function (err, data) {
      if (err != null) {
        View.showError(err);
      } else {
        View.displayLists(data);
      }
    };

    Model.readData(getData);
  }

  static add(task) {
    Model.addTask(task, function (err, newData) {
      if (err) {
        View.showError(err);
      } else {
        View.addTask(newData);
      }
    });
  }

  //   static findById(id) {
  //     const find = Model.find(id);
  //     View.find(find);
  //   }
  //   static delete(id) {
  //     const del = Model.delete(id);
  //     View.delete(del);
  //   }
  //   static complete(id) {
  //     const complete = Model.completed(id);
  //     View.Complete(complete);
  //   }
  //   static uncomplete(id) {
  //     const uncomplete = Model.uncomplete(id);
  //     View.uncompleted(uncomplete);
  //   }
}

module.exports = Controller;

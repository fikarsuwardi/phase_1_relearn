"use strict";

const Data = require("../models/class");

class View {
  static help() {
    console.log(
      `node todo.js\nnode todo.js help\nnode todo.js list\nnode todo.js add <task content>\nnode todo.js findByID <task id>\nnode todo.js delete <task id>\nnode todo.js complete <task id>\nnode todo.js uncomplete <task id>`
    );
  }

  static displayLists(data) {
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].getPrivateId}. ${data[i].task}`);
    }
  }

  static addTask(added) {
    console.log(`Added "${added.task}" to your TODO list...`);
  }

  // static find(content) {
  //     console.log(`${content.id}. ${content.task}`);
  //   }

  // static delete(deleted) {
  //     console.log(`Deleted "${deleted.task}" to your TODO list...`);
  // }

  // static Complete(complete) {
  //     for (let i = 0; i < complete.length; i++) {
  //       console.log(`${complete[i].id}. ${complete[i].status} ${complete[i].task}`);
  //     }
  // }

  // static uncompleted(uncomplete) {
  //     for (let i = 0; i < uncomplete.length; i++) {
  //       console.log(`${uncomplete[i].id}. ${uncomplete[i].status} ${uncomplete[i].task}`);
  //     }
  // }

  static showError(err) {
    console.log(err);
  }
}

module.exports = View;

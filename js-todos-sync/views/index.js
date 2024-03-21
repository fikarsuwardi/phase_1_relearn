"use strict";

class View {
  static displayHelp() {
    console.log(
      `node todo.js\nnode todo.js help\nnode todo.js list\nnode todo.js add <task content>\nnode todo.js findByID <task id>\nnode todo.js delete <task id>\nnode todo.js complete <task id>\nnode todo.js uncomplete <task id>`
    );
  }

  static displayData(datas) {
    for (let i = 0; i < datas.length; i++) {
      console.log(`${datas[i].id}. ${datas[i].task}`);
    }
  }

  static displayAddData(data) {
    console.log(`Added "${data.task}" to your todo list...`);
  }

  static displayFindData(data) {
    console.log(`${data.id}. ${data.task}`);
  }

  static deletedData(data) {
    console.log(`Deleted "${data.task}" from your todo list...`);
  }

  static complete(data) {
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].id}. ${data[i].status} ${data[i].task}`);
    }
  }

  static uncomplete(data) {
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].id}. ${data[i].status} ${data[i].task}`);
    }
  }
}

module.exports = View;

"use strict";

const fs = require("fs");
const Data = require("./class_data");

class Model {
  static readData() {
    const datas = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

    const dataInstance = datas.map((data) => {
      const { id, task, status } = data;
      return new Data(id, task, status);
    });

    return dataInstance;
  }

  static addData(task) {
    const datas = Model.readData();
    let id = datas.length ? datas[datas.length - 1].id + 1 : 1;

    const newData = new Data(id, task, "[ ]");
    datas.push(newData);

    const datasString = JSON.stringify(datas, null, 2);
    fs.writeFileSync("./data.json", datasString);
    return newData;
  }

  static findById(id) {
    const datas = Model.readData();
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].id == id) {
        return datas[i];
      }
    }
  }

  static delete(id) {
    let deleteData;
    let datas = Model.readData();

    for (let i = 0; i < datas.length; i++) {
      if (datas[i].id == id) {
        deleteData = datas[i];
      }
    }

    datas = datas.filter((data) => {
      return data.id != id;
    });

    fs.writeFileSync("./data.json", JSON.stringify(datas, null, 2));

    return deleteData;
  }

  static complete(id) {
    let datas = Model.readData();

    for (let i = 0; i < datas.length; i++) {
      if (datas[i].id == id) {
        datas[i].status = "[X]";
      }
    }
    const datasString = JSON.stringify(datas, null, 2);
    fs.writeFileSync("./data.json", datasString);
    return datas;
  }

  static uncomplete(id) {
    let datas = Model.readData();

    for (let i = 0; i < datas.length; i++) {
      if (datas[i].id == id) {
        datas[i].status = "[ ]";
      }
    }
    const datasString = JSON.stringify(datas, null, 2);
    fs.writeFileSync("./data.json", datasString);
    return datas;
  }
}

module.exports = Model;

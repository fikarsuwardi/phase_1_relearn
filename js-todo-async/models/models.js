"use strict";

const fs = require("fs");
const Data = require("./class.js");

class Model {
  static readData(callback) {
    fs.readFile("./data.json", "utf-8", function (err, data) {
      if (err != null) {
        callback(err, null);
      } else {
        data = JSON.parse(data);
        let dataInstance = []; // sudah dalam array of instance
        for (let i = 0; i < data.length; i++) {
          let datum = new Data(data[i].id, data[i].task, data[i].status); // proses instance-nya
          dataInstance.push(datum);
        }
        callback(null, dataInstance);
      }
    });
  }

  static addTask(task, callback) {
    const data = Model.readData((err, data) => {
      if (err != null) {
        callback(err, null);
      } else {
        let id = 1;

        if (data.length > 0) {
          id = data[data.length - 1].getPrivateId + 1;
        }
        const newData = new Data(id, task, "[ ]");
        console.log(newData);
        data.push(newData); // proses ini menambahkan data baru ke data di readdata diatas
        const dataString = JSON.stringify(data, null, 2); // untuk mengubah datanya menjadi String
        fs.writeFileSync("./data.json", dataString); // untuk menambah data ke JSON
        callback(null, newData);
      }
    });
  }

  // static find(id) {
  //     let findData = Model.readData();
  //     for (let i = 0; i < findData.length; i++) {
  //         if (findData[i].id === Number(id)) {
  //           return findData[i];
  //         }
  //       }
  // }

  // static delete(id) {
  //     let delData = Model.readData()
  //     for (let i = 0; i < delData.length; i++) {
  //       if (delData[i].id === Number(id)) {
  //         // delData.splice(i, 1);
  //         delData[i] = deleted
  //       }
  //     }

  //     let delJSON = JSON.stringify(delData, null, 2);
  //     fs.writeFileSync("./data.json",delJSON);
  //     return delData
  // }

  // static completed(id) {
  //     let compData = Model.readData()
  //     for (let i = 0; i < compData.length; i++) {
  //       if (compData[i].id === Number(id)) {
  //         compData[i].status = '[X]';
  //       }
  //     }
  //     let compJSON = JSON.stringify(compData, null, 2);
  //     fs.writeFileSync("./data.json",compJSON);
  //     return compData;
  // }

  // static uncomplete(id) {
  //     let uncompData = Model.readData()
  //     for (let i = 0; i < uncompData.length; i++) {
  //       if (uncompData[i].id === Number(id)) {
  //         uncompData[i].status = '[ ]';
  //       }
  //     }
  //     let uncompJSON = JSON.stringify(uncompData, null, 2);
  //     fs.writeFileSync("./data.json",uncompJSON);
  //     return uncompData;
  // }
}

module.exports = Model;

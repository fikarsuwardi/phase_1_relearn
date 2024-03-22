"use strict";

class Data {
  #id;
  constructor(id, task, status = "[ ]") {
    this.#id = id;
    this.task = task;
    this.status = status;
  }

  get getPrivateId() {
    return this.#id;
  }
}

module.exports = Data;

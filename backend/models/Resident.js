const db = require("../config/db");

const Resident = {
  getAll: (callback) => {
    db.query("SELECT * FROM residents", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM residents WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO residents SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE residents SET ? WHERE id = ?", [data, id], callback);
  },
};

module.exports = Resident;

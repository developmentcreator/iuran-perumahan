const db = require("../config/db");

const Payment = {
  getAll: (callback) => {
    db.query("SELECT * FROM payments", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM payments WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO payments SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE payments SET ? WHERE id = ?", [data, id], callback);
  },
};

module.exports = Payment;

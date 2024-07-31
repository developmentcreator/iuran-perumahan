const db = require("../config/db");

const Home = {
  getAll: (callback) => {
    db.query("SELECT * FROM homes", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM homes WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO homes SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE homes SET ? WHERE id = ?", [data, id], callback);
  },
};

module.exports = Home;

const Home = require("../models/Home");

exports.getAll = (req, res) => {
  Home.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Home.getById(req.params.id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.create = (req, res) => {
  Home.create(req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "Home created successfully", id: result.insertId });
  });
};

exports.update = (req, res) => {
  Home.update(req.params.id, req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "Home updated successfully" });
  });
};

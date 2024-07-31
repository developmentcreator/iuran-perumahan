const Resident = require("../models/Resident");

exports.getAll = (req, res) => {
  Resident.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Resident.getById(req.params.id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.create = (req, res) => {
  Resident.create(req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "Resident created successfully", id: result.insertId });
  });
};

exports.update = (req, res) => {
  Resident.update(req.params.id, req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "Resident updated successfully" });
  });
};

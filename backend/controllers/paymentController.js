const Payment = require("../models/Payment");

exports.getAll = (req, res) => {
  Payment.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Payment.getById(req.params.id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.create = (req, res) => {
  Payment.create(req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "Payment created successfully", id: result.insertId });
  });
};

exports.update = (req, res) => {
  Payment.update(req.params.id, req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "Payment updated successfully" });
  });
};

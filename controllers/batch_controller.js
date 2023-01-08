const Batch = require("../models/Batch");

const getAllBatch = (req, res, next) => {
  Batch.find()
    .then((batch) => {
      res.json(batch);
    })
    .catch(next);
};

const addNewBatch = (req, res, next) => {
  Batch.findOne({ batchname: req.body.batchname })
    .then((batch) => {
      if (batch != null) {
        let err = new Error(`this ${req.body.batchname} batch already exists`);
        res.status(400);
        return next(err);
      } else {
        batch = new Batch(req.body);
        batch
          .save()
          .then((batch) => {
            res.json(batch);
          })
          .catch(next);
      }
    })
    .catch(next);
};

const deleteAllBatch = (req, res, next) => {
  Batch.deleteMany()
    .then((reply) => {
      res.json(reply);
    })
    .catch(next);
};

const getBatchById = (req, res, next) => {
  Batch.findById(req.params.batchId)
    .then((batch) => {
      res.json(batch);
    })
    .catch(next);
};

const updateBatchById = (req, res, next) => {
  Batch.findByIdAndUpdate(req.params.batchId, { $set: req.body }, { new: true })
    .then((batch) => {
      res.json(batch);
    })
    .catch(next);
};

const deleteBatchById = (req, res, next) => {
  Batch.findByIdAndRemove(req.params.batchId)
    .then((reply) => {
      res.json(reply);
    })
    .catch(next);
};

module.exports = {
  getAllBatch,
  addNewBatch,
  deleteAllBatch,
  getBatchById,
  updateBatchById,
  deleteBatchById
};

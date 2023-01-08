const express = require("express");
const batchcontroller = require("../controllers/batch_controller");
const router = express.Router();

router
  .route("/")
  .get(batchcontroller.getAllBatch)
  .post(batchcontroller.addNewBatch)
  .delete(batchcontroller.deleteAllBatch);

router
  .route("/:batchId")
  .get(batchcontroller.getBatchById)
  .put(batchcontroller.updateBatchById)
  .delete(batchcontroller.deleteBatchById);

  
module.exports = router;
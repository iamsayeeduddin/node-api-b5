const express = require("express");
const bookCtrl = require("../controllers/bookCtrl");

const router = express.Router();

router.get("/", bookCtrl.getAll);
router.get("/:id", bookCtrl.getByID);
router.post("/", bookCtrl.create);
router.delete("/:id", bookCtrl.delete);
router.put("/:id", bookCtrl.update);
router.patch("/:id", bookCtrl.partialUpdate);

module.exports = router;

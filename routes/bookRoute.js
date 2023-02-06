const express = require("express");
const bookCtrl = require("../controllers/bookCtrl");

const router = express.Router();

router.get("/all-books", bookCtrl.get);
router.get("/book/:id", bookCtrl.getByID);

module.exports = router;

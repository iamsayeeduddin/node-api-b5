const express = require("express");
const defaultCtrl = require("./controllers/defaultCtrl");
const defaultRoute = require("./routes/defaultRoute");
const bookRoute = require("./routes/bookRoute");
const bookCtrl = require("./controllers/bookCtrl");

const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`The Server is Running on PORT ${PORT}`));

app.use("/", defaultRoute);
app.use("/books", bookRoute);

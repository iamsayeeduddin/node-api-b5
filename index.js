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

// REST API or REST Web Services
// Representational State Transfer
// READ, CREATE, UPDATE & DELETE (CRUD)
// 1. Uniform INterface
// HTTP Verbs
// GET: READ () Safe - Read the data - No Change of State
// GET www.example.com/api/books
// POST : CREATE
// PUT : UPDATE
// DELETE
// PATCH: Partially Updating
// 2. Stateless
//3. Cacheability:
// Gmail -> Homepage -> -> Login -> Single Email -> Sessions
// Banking Sites - 2-4 mins - > Security
// 30 Mins
// 4. Layered System
// 5. Client Server

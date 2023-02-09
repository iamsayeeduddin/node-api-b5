const express = require("express");
const bodyParser = require("body-parser");
const defaultRoute = require("./routes/defaultRoute");
const bookRoute = require("./routes/bookRoute");

const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`The Server is Running on PORT ${PORT}`));

app.use(bodyParser.json());

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
// MongoDB - Document Based Databased
// Relational DBs - Non relational dbs
// id name email
// 1 Sayeed email.com
//
// id marks subjecy
// 1    20  enGLISH

// Databases - Collections -
// JSON Document
// {id: 1, "fullName": "Sayeed", marks: [{subject: "maths", marks: 90}, {subject: "maths", marks: 90}] };

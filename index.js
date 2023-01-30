const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, (req, res) => console.log(`Server is running on Port ${PORT}`));

app.get("/", function (req, res) {
  res.status(200); //OK
  res.send("Hello Express JS");
});

app.get("/books", (req, res) => {
  const books = [
    { id: 1, name: "Code Optimization", price: 100 },
    { id: 2, name: "Code Refactoring", price: 80 },
    { id: 3, name: "CSS Flexbox", price: 50 },
  ];
  res.status(200);
  res.json(books);
});

// HTTP Request Format
/*

URL  or URI: http://example.com/api/books
Headers:
    Request: 
        Content-Type: application/JSON
        accept: application/XML
    Response:
        Content-Type: appication/XML
        accept: application/JSON
Method: GET | POST | DELETE | PUT | PATCH (Partial Update) | (verbs)
Body: {

}
Status Code: 200
*/

// https://example.com/api/signup?name=sayeed&password=pass&gender=m X

//HTTP Status Code
// 1xx - Information
// 2xx - Success Information, 200 - OK, 201 - Respose Content, 204 - No Content
// 3xx - Redirection of Request. 301 - Permenant Redirect
// 4xx - Client Error, 400 - Bad Request, 401 - Unauthorized Request, 404 - Not Found
// 5xx - Server Error, 500- Internal Server, 501 Server Unavailable

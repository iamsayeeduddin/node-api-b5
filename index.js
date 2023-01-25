const http = require("http");
const PORT = 5500;

// Local Host - 127.0.0.1

const handler = (req, res) => {
  const books = [
    { id: 1, name: "Code Optimization", price: 100 },
    { id: 2, name: "Code Refactoring", price: 80 },
    { id: 3, name: "CSS Flexbox", price: 50 },
  ];
  //routing
  // setTimeout, setInterval,....
  switch (req.url) {
    case "/":
      res.write("Hello Node JS");
      break;
    case "/books":
      res.write(JSON.stringify(books));
      break;
    case "/authors":
      res.write("Hello Authors!");
      break;
    default:
      res.write("Not Found!");
  }
  res.end();
};

const server = http.createServer(handler);

server.listen(PORT, () => console.log(`Server is running on ${PORT}!`));

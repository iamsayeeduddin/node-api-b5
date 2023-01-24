const http = require("http");
const PORT = 5500;

// Local Host - 127.0.0.1

const handler = (req, res) => {
  switch (req.url) {
    case "/":
      res.write("Hello Node JS");
      break;
    case "/books":
      res.write("Hello Books!");
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

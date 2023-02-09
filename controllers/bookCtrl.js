// const get = (req, res) => {
//   const books = [
//     { id: 1, name: "Code Optimization", price: 100 },
//     { id: 2, name: "Code Refactoring", price: 80 },
//     { id: 3, name: "CSS Flexbox", price: 50 },
//     { id: 4, name: "CSS Grd", price: 70 },
//   ];
//   res.json(books);
// };

const books = [
  {
    id: 1,
    name: "Code Optimization",
    price: 100,
    inStock: false,
  },
  {
    id: 2,
    name: "Code Refactoring",
    price: 80,
    inStock: true,
  },
  {
    id: 3,
    name: "CSS Flexbox",
    price: 50,
    inStock: false,
  },
  {
    id: 4,
    name: "CSS Grd",
    price: 70,
    inStock: true,
  },
];
class BookCtrl {
  // constructor() {
  //   this.create = this.create.bind(this);
  // }

  getAll(req, res) {
    res.status(200);
    res.json(books);
  }

  // Sumary & Detail Pattern

  getByID(req, res) {
    const id = +req.params.id;
    // console.log(req.params);
    let book;
    for (let i = 0; i < books.length; i++) {
      if (id === books[i].id) {
        book = books[i];
      }
    }

    // Error Handling

    if (book) {
      res.status(200);
      res.json(book);
    } else {
      res.status(404);
      res.send("Not Found");
    }
  }

  isPayloadValid(payload) {
    return payload.id && payload.name && payload.price;
  }

  create = (req, res) => {
    const payload = req.body;

    if (this.isPayloadValid(payload)) {
      books.push(payload);
      res.status(201);
      res.send();
    } else {
      res.status(400);
      res.send();
    }
  };

  delete = (req, res) => {
    const id = +req.params.id;
    for (var i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        books.splice(i, 1);
        break;
      }
    }
    res.status(204);
    res.send();
  };

  update = (req, res) => {
    const id = +req.params.id;
    const payload = req.body;

    for (var i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        books[i].name = payload.name;
        books[i].price = payload.price;
        books[i].inStock = payload.inStock;
      }
    }

    res.status(204);
    res.send("Updated");
  };

  partialUpdate = (req, res) => {
    const id = +req.params.id;
    const payload = req.body;

    const book = books.find(function (elem) {
      return elem.id === id;
    });

    if (book) {
      for (let key in payload) {
        book[key] = payload[key];
      }
    }

    res.status(204).send("Updated Successfully!");
  };
}

module.exports = new BookCtrl();

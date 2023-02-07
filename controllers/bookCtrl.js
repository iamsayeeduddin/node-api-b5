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
  },
  {
    id: 2,
    name: "Code Refactoring",
    price: 80,
  },
  {
    id: 3,
    name: "CSS Flexbox",
    price: 50,
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

  get(req, res) {
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
}

module.exports = new BookCtrl();

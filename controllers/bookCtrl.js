const get = (req, res) => {
  const books = [
    { id: 1, name: "Code Optimization", price: 100 },
    { id: 2, name: "Code Refactoring", price: 80 },
    { id: 3, name: "CSS Flexbox", price: 50 },
    { id: 4, name: "CSS Grd", price: 70 },
  ];
  res.json(books);
};

// class BookCtrl {
//   get(req, res) {
//     const books = [
//       {
//         id: 1,
//         name: "Code Optimization",
//         price: 100,
//       },
//       {
//         id: 2,
//         name: "Code Refactoring",
//         price: 80,
//       },
//       {
//         id: 3,
//         name: "CSS Flexbox",
//         price: 50,
//       },
//       {
//         id: 4,
//         name: "CSS Grd",
//         price: 70,
//       },
//     ];
//     res.json(books);
//   }
// }

module.exports = {
  get,
};

const get = (req, res) => {
  res.status(200);
  res.send("Hello Nodemon!");
};

const health = (req, res) => {
  const status = { status: "up" };
  res.status(200);
  res.json(status);
};

module.exports = {
  get,
  health,
};

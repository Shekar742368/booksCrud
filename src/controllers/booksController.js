const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  require("../../config/config.json").development
);
const Books = require("../../models/books")(sequelize, DataTypes);

exports.getBooks = async (req, res) => {
  const results = await Books.findAll();
  res.send(results);
};

exports.createBook = async (req, res) => {
  const formData = req.body;
  const result = await Books.create(formData);
  res.send(result);
};

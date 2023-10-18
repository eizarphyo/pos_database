const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Categories = sequelize.define("categories", {
    category_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category_name: {
      type: Sequelize.STRING,
      required: true,
    },
  });
  return Categories;
};

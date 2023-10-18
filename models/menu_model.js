const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Menus = sequelize.define("menus", {
    menu_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category_id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    ingredient_id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    extraFood_id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    food_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    img: {
      type: Sequelize.STRING,
    },
    is_available: {
      type: Sequelize.BOOLEAN
    }
  });

  return Menus;
};

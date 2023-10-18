const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("orders", {
    order_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    table_id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    waitstaff_id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    order_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    is_paid: {
      type: Sequelize.BOOLEAN,
    },
    orderDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });

  return Orders;
};

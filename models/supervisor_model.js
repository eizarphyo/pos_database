const { Sequelize, sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Supervisor = sequelize.define("supervisor", {
    supervisor_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      required: true,
    },
    email: {
      type: Sequelize.STRING,
      required: true,
    },
    phone: {
      type: Sequelize.STRING,
      required: true,
    },
    gender: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      required: [true, "Please confirm your password"],
      allowNull: false,
    },
  });
  return Supervisor;
};

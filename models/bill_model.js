const { Sequelize, sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Bills = sequelize.define('bills', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        menu_id: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        payment_id: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        qty: {
            type: Sequelize.INTEGER
        },
        discount: {
            type: Sequelize.INTEGER
        },
        total_price: {
            type: Sequelize.INTEGER
        }
    });

    return Bills;
}
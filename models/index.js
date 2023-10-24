const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.menus = require("./menu_model")(sequelize, Sequelize);
db.waitstaff = require("./employees_model")(sequelize, Sequelize);
db.tables = require("./tables_model")(sequelize, Sequelize);
db.customers = require("./customers_model")(sequelize, Sequelize);
db.ingredients = require("./ingredients_model")(sequelize, Sequelize);
db.supervisor = require("./supervisor_model")(sequelize, Sequelize);
db.manager = require("./manager_model")(sequelize, Sequelize);
db.extraFoods = require("./extrafood_model")(sequelize, Sequelize);
db.orders = require("./order_model")(sequelize, Sequelize);
db.orderDetails = require("./orderdetails_model")(sequelize, Sequelize);
db.bills = require("./bill_model")(sequelize, Sequelize);
db.reservations = require('./reservation_model')(sequelize, Sequelize);


db.orders.hasMany(db.tables, { foreignKey: 'table_id' });
db.tables.belongsTo(db.orders, { foreignKey: 'table_id' });

db.orderDetails.hasMany(db.orders, { foreignKey: 'order_id' });
db.orders.belongsTo(db.orderDetails, { foreignKey: 'order_id' });

module.exports = db;

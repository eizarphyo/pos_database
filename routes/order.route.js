module.exports = (app) => {
    const orders = require("../controller/orderController");
  
    var router = require("express").Router();
  
    router.post("/", orders.create).get("/", orders.findAll).delete("/", orders.deleteAll);
    router.get("/:id", orders.findOne).delete("/:id", orders.delete).patch("/:id", orders.update);
  
    app.use("/api/v1/orders", router);
  };
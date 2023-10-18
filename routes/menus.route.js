module.exports = (app) => {
    const menus = require("../controller/menuController");
  
    var router = require("express").Router();
  
    router.post("/", menus.create).get("/", menus.findAll).delete("/", menus.deleteAll);
    router.get("/:id", menus.findOne).delete("/:id", menus.delete).patch("/:id", menus.update);
  
    app.use("/api/v1/menus", router);
  };
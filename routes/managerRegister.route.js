module.exports = (app) => {
    const manager = require("../controller/managerController");
    var router = require("express").Router();

    router.post("/", manager.register);
    app.use("/api/v1/manager/register", router);
}
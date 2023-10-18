module.exports = (app) => {
    const supervisor = require("../controller/supervisorController");
    var router = require("express").Router();

    router.post("/", supervisor.register);
    app.use("/api/v1/supervisor/register", router);
}
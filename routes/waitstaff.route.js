module.exports = (app) => {
    const employees = require("../controller/employeesController");
    var router = require("express").Router();

    router.get("/", employees.employees);
    app.use("/api/v1/employees", router);
}
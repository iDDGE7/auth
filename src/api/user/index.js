const router = require("express").Router();
const UserController = require("./controller");
const { tokenValidation } = require("../../services/middlewares");
const path = "/users";

// >> Here will be the
// definition of the routes.

router.get("/", tokenValidation, UserController.getAllUsers);
router.get("/me/:id", tokenValidation, UserController.getOneUser);
router.put("/me/:id", tokenValidation, UserController.updateUser);
router.delete("/me/:id", tokenValidation, UserController.deleteUser);

module.exports = {
  path,
  router
};

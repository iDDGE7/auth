const router = require("express").Router();
const UserController = require("./controller")
const path = "/users";



// >> Here will be the
// definition of the routes.

router.get("/", UserController.getAllUsers);
router.get("/me/:id", UserController.getOneUser);
router.put("/me/:id", UserController.updateUser);
router.delete("/me/:id", UserController.deleteUser);

module.exports = {
  path,
  router,
};

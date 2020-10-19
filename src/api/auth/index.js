const router = require("express").Router();
const AuthController = require("./controller");
const path = "/auth";

// >> Here will be the
// definition of the routes.

router.get('/', AuthController.index);
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = {
  path,
  router,
};

const { Router } = require("express");
// >> Here will be the APIs
// importation ('require').
//
// A) Uncomment this line:
const main = require("./main");
const router = new Router();

// >> Here will be the APIs
// registration

const user = require("./user");
const auth = require("./auth");

// A) Uncomment this line:
router.use(main.path, main.router);
router.use(user.path, user.router);
router.use(auth.path, auth.router);

module.exports = router;

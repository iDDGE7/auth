const router = require("express").Router();

const path = "/users";

const { model } = require("./model");

// >> Here will be the
// definition of the routes.

// router.get("/users", async (req, res) => {
//  model.find( )

//   res.status(200).json({ msg: "ok" });
// });



module.exports = {
  path,
  router,
};

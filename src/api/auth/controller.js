const AuthController = {};
const { model } = require("../user/model");
const { tokenGen } = require("../../services/jwt");
const { jwtSecret } = require("../../config");
const jwt = require("jsonwebtoken");
const path = "/auth";
// >> Here will be the
// endpoints for the Users.

AuthController.index = (req, res) => {
  let base_uri = req.protocol + "://" + req.hostname + path;
  res.json({
    register: `${base_uri}`,
    login: `${base_uri}/login`
  });
};

AuthController.register = async (req, res) => {
  let user = new model(req.body);

  await user
    .save()
    .then(user => {
      console.log(user);
      res.status(200).json({ msg: "User Created" });
    })
    .catch(e => {
      console.log(e);
      res.status(201).json({ msg: `There was an error ${e.message}` });
    });
};

AuthController.login = async (req, res) => {
  let { username, password } = req.body;

  model
    .findOne({ username: username })
    .then(user => (user ? user : null))
    .then(user => (user.validatePassword(password) ? tokenGen(user) : null))
    .then(token => {
      res.json({
        access_token: token
      });
    })
    .catch(err => res.status(401).json({ err }));
};

module.exports = AuthController;

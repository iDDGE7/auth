const AuthController = {};
const { model } = require("../user/model");
const path = "/auth";

// >> Here will be the
// endpoints for the Users.

AuthController.index = (req, res) => {
  let base_uri = req.protocol + "://" + req.hostname + path;
  res.json({
    register: `${base_uri}`,
    login: `${base_uri}/login`,
  });
};

AuthController.register = async (req, res) => {
  let user = new model(req.body);

  await user
    .save()
    .then(() => {
      res.status(200).json({ msg: "User Created" });
    })
    .catch((e) => {
      res.status(201).json({ msg: `There was an error ${e.message}` });
    });
};

AuthController.login = async (req, res) => {
  let { username, password } = req.body;

  user = await model.findOne({ username: username }).then(async (user) => {
    const match = await user.validatePassword(password);
    if (match) {
      res.status(200).json({ msg: "match!" });
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  });
};

module.exports = AuthController;

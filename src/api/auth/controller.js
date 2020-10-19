const AuthController = {};
const { model, schema } = require("../user/model");

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
    user.password = await schema.methods.encryptPassword(user.password);

  
    await user
      .save()
      .then(() => {
        res.status(200).json({ msg: "User Created" });
      })
      .catch((e) => {
        res.status(201).json({ msg: `There was an error ${e.message}` });
      });

  }

  AuthController.login = (req, res) => {
    let { username, password } = req.body;
    console.log(username);
  
    // console.log(await schema.methods.matchPassword(password))
    // await model.findOne({ username: username }).then(async (user) => {
    //   const match = await schema.methods.matchPassword(password);
    //   if (match) {
    //     res.status(200).json({ msg: "match!" });
    //   } else {
    //     res.status(401).json({ msg: "Unauthorized" });
    //   }
  
    // }).catch((e) => {
    //   console.log(e);
    // });
  }

module.exports = AuthController;

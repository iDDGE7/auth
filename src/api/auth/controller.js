const AuthController = {};
const { model, schema } = require("../user/model");
const path = "/auth";

// >> Here will be the
// endpoints for the Users.

AuthController.index =  (req, res) => {

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

  }

  AuthController.login = async(req, res) => {
    let { username, password } = req.body;

  
    
    user = await model.findOne({ username: username }).then((user) => {
      console.log(user);
      res.status(200).json({ msg: "ok" });
    })

    // if(user){
    //    console.log(user);
    //   // const match = await user.schema.methods.validatePassword(password)
    //   // const match = await schema.methods.validatePassword(password);
    //   // if (match) {
    //   //   res.status(200).json({ msg: "match!" });
    //   // } else {
    //   //   res.status(401).json({ msg: "Unauthorized" });
    //   // }
    //   res.status(200).json({ msg: "ok" });
    // }
    // console.log(user);

   
  }

module.exports = AuthController;

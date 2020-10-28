const { jwtSecret } = require("../../config");
const jwt = require("jsonwebtoken");

// >> Here is where login
// and verification functions will be declared

const tokenGen = user => {
  const payload = {
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    exp: 1440
  };

  return jwt.sign(payload, jwtSecret, { algorithm: "HS256" });
};

module.exports = { tokenGen };

const { jwtSecret } = require("../../config");
const jwt = require("jsonwebtoken");

// >> Here is where login
// and verification functions will be declared

const tokenGen = user => {
  const payload = {
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname
  };

  return jwt.sign(payload, jwtSecret, { expiresIn: 60 * 60 });
};

module.exports = { tokenGen };

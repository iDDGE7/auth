const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config");
// >> Here is where will
// declared the middlewares

const tokenValidation = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token == null) return res.status(401).json({ msg: "No token provided" });

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ msg: "Token inválida" });
    next();
  });
};

module.exports = { tokenValidation };

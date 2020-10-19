const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// >> Here will be the User schema.
const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

// >> Here will be the pre methods for the schema.
UserSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 12);
  this.password = hash;
  next();
});

// >> Here will be the User methods for the schema.
UserSchema.methods.validatePassword = function(password) {
    console.log(password);
    console.log(this.password);
    
    // return bcrypt.compareSync(password, this.password);
   
  }

// >> Here will be the User model using the User schema.
const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  schema: UserSchema,
  model: UserModel,
};

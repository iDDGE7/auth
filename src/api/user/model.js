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
UserSchema.pre("", () => {});

// >> Here will be the User methods for the schema.
UserSchema.methods = {
  encryptPassword: async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  },
  matchPassword: async (password) => {
    return await bcrypt.compare(password, this.password);
  },
};

// >> Here will be the User model using the User schema.
const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  schema: UserSchema,
  model: UserModel,
};

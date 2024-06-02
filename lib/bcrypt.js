const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const hashPassword = (Plainpassword) => {
  return bcrypt.hashSync(Plainpassword, salt);
};

const comparePassword = (Plainpassword, hashedPassword) => {
  return bcrypt.compareSync(Plainpassword, hashedPassword);
};

module.exports = { hashPassword, comparePassword };

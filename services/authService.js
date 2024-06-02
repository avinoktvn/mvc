const { hashPassword, comparePassword } = require("../lib/bcrypt");
const authRepository = require("../repositories/authRepository");
const { generateToken } = require("../lib/jwt");

const register = async (params) => {
  const { email, password, role } = params;

  const encrpytedPassword = hashPassword(password);

  const registerParams = {
    email,
    password: encrpytedPassword,
    role,
  };
  const data = await authRepository.register(registerParams);

  return data;
};

const login = async (params) => {
  const { email, password } = params;

  const loginParams = {
    email,
    password,
  };
  const foundUser = await authRepository.login(loginParams);

  // SUKSES LOGIN

  if (comparePassword(password, foundUser.password)) {
    // GENERATE TOKEN

    const accessToken = generateToken({
      id: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    });
    return accessToken;
  } else {
    throw { name: "Invalid Credentials" };
  }
  // foundUser;
};

module.exports = { register, login };

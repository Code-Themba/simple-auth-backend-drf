// method:  POST
// url   :  /api/users/register/
// access:  Public
const registerUser = (req, res) => {
  return res.status(201).json({
    message: "User created!",
  });
};

// method:  Post
// url   :  /api/users/login
// access:  Public
const loginUser = (req, res) => {
  return res.status(200).json({
    message: "User logged in successfully!!",
  });
};

// method:  GET
// url   :  /api/users/me
// access:  Private
const getUserInfo = (req, res) => {
  return res.status(200).json({
    message: "User data retrieved!!!",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};

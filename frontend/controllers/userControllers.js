// method:  POST
// url   :  /api/users/register/
// access:  Public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  user = JSON.stringify({ username, email, password });
  try {
    const response = await fetch(`${process.env.API_URL}/api/users/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    });
    const data = await response.json();
    console.log(data);
    return res.status(201).json({
      user: {
        username: data.username,
        email: data.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error. Something Went Wrong!!",
    });
  }
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

// method:  POST
// url   :  /api/users/register/
// access:  Public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please fill in all fields",
    });
  }
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
    //console.log(data);
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
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill in all required fields!!!",
      });
    }

    user = JSON.stringify({ email, password });

    const response = await fetch(`${process.env.API_URL}/api/token/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: user,
    });
    const data = await response.json();
    res.cookie("jwt", data, {
      httpOnly: true,
      path: "/me",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 30 * 1000,
      sameSite: "strict",
    });
    return res.status(200).json({
      message: "User logged in successfully!!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error. Something Went Wrong!!",
    });
  }
};

// method:  GET
// url   :  /api/users/me
// access:  Private
const getUserInfo = async (req, res) => {
  const { access } = req.cookies.jwt;
  // console.log(access);
  const response = await fetch(`http://${process.env.API_URL}/api/users/me/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${access}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return res.status(200).json({
    message: "User data retrieved!!!",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};

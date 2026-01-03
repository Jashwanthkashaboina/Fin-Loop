const User = require("../models/user");
const express = require("express");
const router = express.Router({ mergeParams: true });
const passport = require("passport");




// post req and it will be async because we are making changes in db
// because it is post req we get data from req.body
router.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;

    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        username: registeredUser.username,
        email: registeredUser.email,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});


// login routes
router.post("/login",
    passport.authenticate("local"),
    (req, res) => {
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        username: req.user.username,
        email: req.user.email,
      },
    });
  }
);


module.exports = router;
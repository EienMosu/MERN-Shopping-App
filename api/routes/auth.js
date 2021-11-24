const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const purePassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    purePassword !== req.body.password &&
      res.status(401).json("Wrong Credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: "2d" }
    );

    // Send eveything but password
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Third Part Auth Login
router.get("/login/third/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      massage: "successfull",
      user: req.user,
      // cookies
      // cookies: req.cookies
      // or jwt you can send
    });
  }
});

router.get("/login/third/failed", (req, res) => {
  res.status(401).json({
    success: false,
    massage: "failure",
  });
});

router.get("/third/logout", (req, res) => {
  req.logOut();
});

// Google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://reverent-beaver-92a886.netlify.app/",
    failureRedirect: "/login",
  })
);

// Github
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "https://reverent-beaver-92a886.netlify.app/",
    failureRedirect: "/login",
  })
);

module.exports = router;
